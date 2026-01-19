import React, { useEffect, useState } from 'react';
import PortfolioSection from '@/components/vijquant/PortfolioSection';
import { supabase } from '@/lib/supabase';

const PortfolioPage: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('created_at', { ascending: false });

      console.log('PORTFOLIO DATA:', data, error);

      if (!error && data) {
        setProjects(data);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading portfolio...
      </div>
    );
  }

  return (
    <main>
      <PortfolioSection
        projects={projects}
        onProjectView={() => {}}
      />
    </main>
  );
};

export default PortfolioPage;
