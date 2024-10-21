import MobileMegamenuTemplate from '@/components/mega-menu/mobile-mega-menu-template';
import React from 'react';
import {
  FaHeadset,
  FaQuestionCircle,
  FaLifeRing,
  FaUsers,
  FaCommentDots,
} from 'react-icons/fa';

const MobileMegaMenuContentSupport: React.FC = () => {
  const supportItems = [
    {
      icon: <FaLifeRing />,
      title: "Help Center",
      description: "Find detailed articles and troubleshooting guides.",
      link: "/support/help-center",
    },
    {
      icon: <FaHeadset />,
      title: "Live Chat",
      description: "Chat with our support team for real-time assistance.",
      link: "/support/live-chat",
    },
    {
      icon: <FaQuestionCircle />,
      title: "FAQ",
      description: "Get answers to frequently asked questions.",
      link: "/support/faq",
    },
    {
      icon: <FaUsers />,
      title: "Community Forum",
      description: "Join the community and find peer-to-peer support.",
      link: "/support/community-forum",
    },
    {
      icon: <FaCommentDots />,
      title: "Submit a Ticket",
      description: "Can't find what you're looking for? Submit a support ticket.",
      link: "/support/submit-ticket",
    },
  ];

  return (
    <MobileMegamenuTemplate
      sections={[{ title: "Support", items: supportItems }]}
    />
  );
};

export default MobileMegaMenuContentSupport;