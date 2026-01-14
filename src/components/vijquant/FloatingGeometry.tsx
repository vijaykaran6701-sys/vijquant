import React, { useEffect, useRef } from 'react';

interface FloatingGeometryProps {
  className?: string;
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const rotationRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3D vertices for an icosahedron
    const phi = (1 + Math.sqrt(5)) / 2;
    const vertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ].map(v => v.map(c => c * 50));

    const edges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
      [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
      [4, 9], [2, 4], [6, 2], [8, 6], [9, 8],
      [1, 9], [5, 4], [11, 2], [10, 6], [7, 8],
      [4, 5], [2, 11], [6, 10], [8, 7], [9, 1],
    ];

    const project = (point: number[], rotX: number, rotY: number) => {
      let [x, y, z] = point;
      
      // Rotate around Y axis
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const tempX = x * cosY - z * sinY;
      z = x * sinY + z * cosY;
      x = tempX;
      
      // Rotate around X axis
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const tempY = y * cosX - z * sinX;
      z = y * sinX + z * cosX;
      y = tempY;
      
      // Perspective projection
      const scale = 200 / (200 + z);
      return {
        x: x * scale,
        y: y * scale,
        z,
        scale,
      };
    };

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      
      // Update rotation based on mouse
      rotationRef.current.x += (mouseRef.current.y * 0.5 - rotationRef.current.x) * 0.05;
      rotationRef.current.y += (mouseRef.current.x * 0.5 - rotationRef.current.y) * 0.05;
      
      // Auto rotation
      const autoRotX = rotationRef.current.x + Date.now() * 0.0002;
      const autoRotY = rotationRef.current.y + Date.now() * 0.0003;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Project all vertices
      const projectedVertices = vertices.map(v => project(v, autoRotX, autoRotY));
      
      // Draw edges
      edges.forEach(([i, j]) => {
        const p1 = projectedVertices[i];
        const p2 = projectedVertices[j];
        
        const gradient = ctx.createLinearGradient(
          centerX + p1.x, centerY + p1.y,
          centerX + p2.x, centerY + p2.y
        );
        
        const alpha1 = Math.max(0.1, Math.min(0.8, (p1.z + 100) / 200));
        const alpha2 = Math.max(0.1, Math.min(0.8, (p2.z + 100) / 200));
        
        gradient.addColorStop(0, `rgba(99, 102, 241, ${alpha1})`);
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${(alpha1 + alpha2) / 2})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, ${alpha2})`);
        
        ctx.beginPath();
        ctx.moveTo(centerX + p1.x, centerY + p1.y);
        ctx.lineTo(centerX + p2.x, centerY + p2.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
      
      // Draw vertices as glowing points
      projectedVertices.forEach((p) => {
        const alpha = Math.max(0.3, Math.min(1, (p.z + 100) / 200));
        const size = 2 + p.scale * 2;
        
        // Glow
        const glow = ctx.createRadialGradient(
          centerX + p.x, centerY + p.y, 0,
          centerX + p.x, centerY + p.y, size * 3
        );
        glow.addColorStop(0, `rgba(99, 102, 241, ${alpha * 0.5})`);
        glow.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.beginPath();
        ctx.arc(centerX + p.x, centerY + p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
        
        // Point
        ctx.beginPath();
        ctx.arc(centerX + p.x, centerY + p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default FloatingGeometry;
