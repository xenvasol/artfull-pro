"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function ContactForm({
  title = "Start Your Project",
  description = "Ready to transform your business? Get in touch with our expert team.",
  className = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      className={`bg-white border-0 ${className}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-700">{title}</CardTitle>
        <p className="text-gray-500">{description}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              className="text-gray-500"
              required
              disabled={isSubmitting}
            />
            <Input
              name="email"
              placeholder="Your Email *"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-background"
              required
              disabled={isSubmitting}
            />
          </div>
          <Input
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleInputChange}
            className="bg-background"
            disabled={isSubmitting}
          />
          <Input
            name="budget"
            placeholder="Project Budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="bg-background"
            disabled={isSubmitting}
          />
          <Textarea
            name="message"
            placeholder="Tell us about your project... *"
            value={formData.message}
            onChange={handleInputChange}
            className="min-h-[120px] bg-background"
            required
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
