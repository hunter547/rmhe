import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home">
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 gap-8 container py-20">
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-primary">Modern</span>{" "}
                <span className="text-white underline decoration-secondary">
                  Home
                  <br />
                  Transformations
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                We specialize in contemporary remodeling that enhances both form
                and function. Let&apos;s create spaces that inspire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg"
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group text-lg border-secondary hover:bg-secondary/10 hover:text-secondary text-foreground"
                >
                  View Portfolio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:flex items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/50 to-transparent z-10 rounded-xl" />
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl bg-muted overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
                    alt="Modern kitchen design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video rounded-xl bg-muted overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80"
                    alt="Luxury bathroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-video rounded-xl bg-muted overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
                    alt="Contemporary living room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl bg-muted overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80"
                    alt="Home exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Kitchen Remodeling",
                  description:
                    "Transform your kitchen into a modern, functional space that's perfect for cooking and entertaining.",
                  icon: "🏠",
                },
                {
                  title: "Bathroom Renovation",
                  description:
                    "Create your dream bathroom with custom designs and premium materials.",
                  icon: "🚿",
                },
                {
                  title: "Home Additions",
                  description:
                    "Expand your living space with expertly designed and constructed additions.",
                  icon: "➕",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white border border-gray-200 hover:border-primary/50 transition-colors shadow-sm"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5 border-t border-border">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Contact us today for a free consultation and let&apos;s discuss
              your remodeling project.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary hover:bg-secondary/10 hover:text-secondary text-foreground"
            >
              Schedule Consultation
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
