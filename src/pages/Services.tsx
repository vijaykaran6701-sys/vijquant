import React, { useEffect, useState } from "react";
import ServicesSection from "@/components/vijquant/ServicesSection";
import { supabase } from "@/lib/supabase";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("id, title, description, icon");

      console.log("SERVICES FROM SUPABASE:", data, error);

      if (!error && data) {
        setServices(data);
      }

      setLoading(false);
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading services...
      </div>
    );
  }

  return (
    <main>
      <ServicesSection services={services} />
    </main>
  );
};

export default ServicesPage;
