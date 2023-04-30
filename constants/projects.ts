export const projects = [
  {
    company: "Rewind",
    website: "https://www.tryrewind.ca/",
    description:
      "Rewind is an ongoing data engineering project under the partnership of Youtuber Jordan Matter.  The goal is to find the most trending videos within a day of their upload. Our platform tracks popular creators and our algorithm predicts hit videos, allowing creators to be the first to jump on new trends.",
    contributions: [
      "Created and fine-tuned a highly efficient priority-based queuing system using Redis and Bull MQ to fetch YouTube video data for hundreds of channels simultaneously",
      "The system incorporates optimal intervals and delays, with dedicated workers continuously pinging the YouTube API to ensure real-time data retrieval and listens to Google’s PubSub channel upload system",
      "Designed and created a front-end interface with a retro movie theme, providing users with an engaging way to view channels and analyze video performance data using Recharts JS",
    ],
    tech: [
      "Google's PubSubHubbub",
      "Youtube Data API",
      "Redis + Bull MQ",
      "Next.js + React",
      "PostgreSQL (Supabase)",
      "TailwindCSS",
      "Heroku + CI/CD pipeline with Github actions",
    ],
  },
  {
    company: "Mr. Beam",
    website: "https://mrbeam-weld.vercel.app",
    description:
      "Mr.Beam is a steel production planning software that optimizes steel beam orders for the best cutting processes to reduce wastage of steel and workers time. This enterprise software is targeted towards steel cutting companies across North America.",
    contributions: [
      "Developed an recursive algorithm, which provides recommendations on which beam to cuts to avoid wastage of leftover beams and optimize steel cutters time",
      "Architected an inventory and order management system with PostgreSQL which auto updates based on the algorithm inventory recommendations",
      "Built an enterprise auth system with email verification, to allow only organization employees to access their Mr. Beam account data",
    ],
    tech: [
      "Next.js + React",
      "PostgreSQL (Supabase)",
      "MUI + TailwindCSS",
      "Vercel + CI/CD pipeline with Github actions",
    ],
  },
  {
    company: "SwayShop",
    website: "https://apps.shopify.com/sway",
    description:
      "SwayShop was a social commerce platform intended to create curated shops for creators. We allowed for one-click shopping from shoppable posts and also allows seamless promotion, selling of brand products, receiving payments, customizing their shop, and tracking their shops' performance, enabling creators to start earning with your personalized shop.",
    contributions: [
      "Architected and implemented a seamless integration of the SwayShop commerce platform into Shopify using Shopify API's, enabling features like inventory sync, order forwarding and tracking revenue",
      "Designed and developed a sophisticated real-time inventory synchronization system that handles complex scenarios such as currency conversion, deletion, addition, updating, publishing, and unpublishing of new products.",
      "Utilized Shopify webhook to build a reliable mechanism for transmitting multi-vendor orders back to their respective shops with shipping, order, and customer data for efficient fulfillment of customer orders.",
      "Engineered a robust Stripe OAuth and multi-party payment system with payouts to creators and brands",
    ],
    tech: [
      "Shopify REST & GQL APIs",
      "Stripe OAuth & APIs",
      "React",
      "Express + Node.js",
      "MongoDB",
      "CSS3",
    ],
  },
];
