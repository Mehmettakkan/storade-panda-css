import React from "react";
import {
  FaUserTie,         // CRM Integration
  FaSitemap,         // ERP Integration
  FaMoneyCheckAlt,   // Payment Gateways
  FaFileInvoiceDollar, // Accounting Software
  FaChartBar,        // Marketing Tools
  FaCloudUploadAlt,  // Cloud Storage
  FaPlug,
  FaCodeBranch,
} from "react-icons/fa";
import MegamenuTemplate from "../../../../components/mega-menu/mega-menu-template";

const MegaMenuContentIntegrations = () => {
  const integrations = [
    {
      icon: <FaUserTie />,
      title: "CRM Integration",
      description: "Seamlessly integrate with leading CRM platforms.",
      link: "/integrations/crm",
    },
    {
      icon: <FaSitemap />,
      title: "ERP Integration",
      description: "Connect your ERP system for real-time data sync.",
      link: "/integrations/erp",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Payment Gateways",
      description: "Easily integrate payment gateways for smooth transactions.",
      link: "/integrations/payment-gateways",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Accounting Software",
      description: "Integrate with popular accounting software for seamless financial tracking.",
      link: "/integrations/accounting-software",
    },
    {
      icon: <FaChartBar />,
      title: "Marketing Tools",
      description: "Connect with top marketing tools to boost your campaigns.",
      link: "/integrations/marketing-tools",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Cloud Storage",
      description: "Integrate with cloud storage services for easy file management.",
      link: "/integrations/cloud-storage",
    },
  ];

  const support = {
    title: "Support",
    items: [
      {
        icon: <FaPlug />,
        title: "Integration Help",
        description: "Need help with integrating? Our support team is here to assist you.",
        linkText: "Get support",
        link: "/support/integration-help",
      },
      {
        icon: <FaCodeBranch />,
        title: "API Documentation",
        description: "Visit our developer portal for detailed API documentation.",
        linkText: "View API Docs",
        link: "/docs/api",
      },
    ],
  };

  return (
    <MegamenuTemplate
      sections={[{ title: "Integrations", items: integrations }]}
      support={support}
    />
  );
};

export default MegaMenuContentIntegrations;