import MobileMegamenuTemplate from '@/components/mega-menu/mobile-mega-menu-template';
import React from 'react';
import {
  FaBook,
  FaVideo,
  FaBlog,
  FaFileAlt,
  FaChalkboardTeacher,
  FaToolbox,
} from 'react-icons/fa';

const MobileMegaMenuContentResources: React.FC = () => {
  const resources = [
    {
      icon: <FaBlog />,
      title: "Blog",
      description: "Read the latest insights and updates on our blog.",
      link: "/resources/blog",
    },
    {
      icon: <FaBook />,
      title: "Guides & Documentation",
      description: "Comprehensive guides and documentation to get you started.",
      link: "/resources/guides-documentation",
    },
    {
      icon: <FaVideo />,
      title: "Webinars",
      description: "Watch our latest webinars and video content.",
      link: "/resources/webinars",
    },
    {
      icon: <FaFileAlt />,
      title: "Case Studies",
      description: "Learn how others are successfully using our platform.",
      link: "/resources/case-studies",
    },
  ];

  const support = {
    title: "Support",
    items: [
      {
        icon: <FaToolbox />,
        title: "Developer Portal",
        description: "Access technical documentation and developer tools.",
        linkText: "Visit Developer Portal",
        link: "/support/developer-portal",
      },
      {
        icon: <FaChalkboardTeacher />,
        title: "Webinar Support",
        description: "Need help with webinars? Our team is here to assist.",
        linkText: "Get Webinar Support",
        link: "/support/webinar-support",
      },
    ],
  };

  return (
    <MobileMegamenuTemplate
      sections={[{ title: "Resources", items: resources }]}
      support={support}
    />
  );
};

export default MobileMegaMenuContentResources;