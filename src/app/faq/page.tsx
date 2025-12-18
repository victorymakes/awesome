import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default async function FAQPage() {
  const faqs: Array<{ id: string; question: string; answer: string }> = [
    {
      id: 'what-is-awesomelists',
      question: 'What is AwesomeLists?',
      answer:
        'AwesomeLists is a curated collection of SaaS boilerplates, templates, libraries, and tools designed to help developers accelerate their project development. We aggregate high-quality resources that can save you months of development time and help you build your SaaS products faster.',
    },
    {
      id: 'why-created',
      question: 'Why was AwesomeLists created?',
      answer:
        'AwesomeLists was created out of personal need. When starting a new SaaS project, I found myself spending countless hours searching for quality boilerplates and templates scattered across the internet. This platform consolidates all those resources in one place, saving developers valuable time. After building this collection, I also created LaunchSaaS (https://launchsaas.org/), a production-ready SaaS starter kit with all the essentials you need to launch quickly.',
    },
    {
      id: 'how-to-submit',
      question: 'How do I submit a new item to AwesomeLists?',
      answer:
        'We welcome community contributions! Here\'s how to submit a new item:\n\n1. Fork the repository on GitHub\n2. Navigate to the `src/data/` directory\n3. Edit the `awesome-items.json` file and add your item with the following format:\n\n```json\n{\n  "title": "Your Project Name",\n  "summary": "A concise description of your project (2-3 sentences)",\n  "url": "https://your-project-url.com",\n  "category": "SaaS Boilerplate",\n  "tags": ["Next.js", "TypeScript", "Stripe", "Authentication"],\n  "description": "Optional: A more detailed description",\n  "image": "Optional: Image URL for preview"\n}\n```\n\n4. Commit your changes and submit a Pull Request\n5. Our team will review and merge your submission\n\nMake sure your URL is working and the information is accurate.',
    },
    {
      id: 'submission-guidelines',
      question: 'What are the submission guidelines?',
      answer:
        "When submitting an item, please follow these guidelines to ensure quality:\n\n✓ Title: Keep it clear, concise, and descriptive\n✓ Summary: Provide a 2-3 sentence overview of what the project offers\n✓ URL: Ensure the link is working and points to the correct resource\n✓ Category: Choose from existing categories (SaaS Boilerplate, Next.js Template, etc.)\n✓ Tags: Add relevant technology tags (e.g., TypeScript, React, Stripe, PostgreSQL)\n✓ Quality: Only submit resources you personally recommend and have used or reviewed\n✓ Accuracy: Make sure all information is accurate and up-to-date\n✓ Uniqueness: Avoid submitting duplicates of existing items\n\nOur team reserves the right to request changes or reject submissions that don't meet our quality standards or are already in the collection.",
    },
    {
      id: 'categories',
      question: 'What categories are available?',
      answer:
        'We organize items into comprehensive categories including:\n\n• SaaS Boilerplates - Complete starter kits for SaaS products\n• Next.js Templates - Next.js-based projects and templates\n• React Components & Libraries - Reusable React components\n• Backend Frameworks - Server-side frameworks and tools\n• Authentication & Security - Auth solutions and security tools\n• Payment Processing - Stripe, PayPal, and other payment integrations\n• Database Solutions - Database tools and services\n• UI Component Libraries - Pre-built component systems\n• DevOps & Deployment - Infrastructure and deployment tools\n• API & Backend Tools - API frameworks and utilities\n• Email Services - Email delivery and template platforms\n• Analytics & Monitoring - Analytics and monitoring solutions\n• And more!\n\nIf you believe a new category is needed, suggest it in your Pull Request.',
    },
    {
      id: 'search-filter',
      question: 'How do I search and filter items?',
      answer:
        "AwesomeLists provides powerful search and filtering capabilities:\n\nSearch Bar - Use the search bar to find items by title or keyword. Results update in real-time.\n\nCategory Filter - Click on a category in the sidebar to view all items in that category.\n\nTag Filter - Use multiple tags to narrow down your search results.\n\nCombined Filters - You can combine category and tag filters simultaneously for specific results.\n\nTips:\n• Try different keywords if your first search doesn't yield results\n• Use multiple tags to refine your search\n• Browse categories if you're not sure what you're looking for",
    },
    {
      id: 'dark-mode',
      question: 'Does AwesomeLists support dark mode?',
      answer:
        'Yes! AwesomeLists fully supports both light and dark modes.\n\nTo switch themes:\n1. Look for the theme toggle button in the top-right corner of the navbar\n2. Click it to switch between light and dark modes\n3. Your preference is automatically saved in your browser\n\nThe dark mode is easy on the eyes and perfect for browsing at night.',
    },
    {
      id: 'mobile-friendly',
      question: 'Is AwesomeLists mobile-friendly?',
      answer:
        'Absolutely! AwesomeLists is fully responsive and works seamlessly on all devices.\n\nMobile features:\n• Fully responsive design that adapts to any screen size\n• Mobile-optimized search and filter interface\n• Hamburger menu for easy navigation on small screens\n• Touch-friendly buttons and links\n• Optimized performance for mobile connections\n\nYou can browse the collection on your phone, tablet, or desktop without any issues. The mobile menu is accessible via the hamburger icon (☰).',
    },
    {
      id: 'launchsaas',
      question: 'What is LaunchSaaS and how does it relate to AwesomeLists?',
      answer:
        'LaunchSaaS (https://launchsaas.org/) is a comprehensive, production-ready SaaS starter kit created alongside AwesomeLists.\n\nThe Difference:\n• AwesomeLists - A curated directory helping you discover the best tools and templates\n• LaunchSaaS - A complete, ready-to-deploy SaaS starter kit\n\nLaunchSaaS Includes:\n• User authentication and authorization with multiple providers\n• Team management with roles and permissions\n• Billing and subscription management (Stripe integration)\n• Email system for transactional and marketing emails\n• Database setup with migrations and seeding\n• RESTful API structure with best practices\n• Pre-built UI components and pages\n• Admin dashboard for team management\n• And much more!\n\nChoose Based On Your Needs:\n• Use AwesomeLists to explore options and make informed decisions\n• Use LaunchSaaS if you want a complete, production-ready foundation',
    },
    {
      id: 'contribute',
      question: 'Can I contribute in ways other than submitting items?',
      answer:
        "Absolutely! We welcome contributions in many forms beyond submitting new items:\n\n• Report Issues - Found a broken link or incorrect information? Open an issue on GitHub\n• Suggest Improvements - Have ideas to make AwesomeLists better? Share your suggestions\n• Improve Documentation - Help improve our README, FAQ, or contribution guides\n• Share Feedback - Your feedback helps us understand what works and what doesn't\n• Spread the Word - Share AwesomeLists with your developer community\n• Fix Bugs - Found a bug? Submit a fix!\n• Improve Design - Have design suggestions? We're open to improvements\n• Update Items - Help keep existing items up-to-date\n\nFor any of these:\n• Open an issue on GitHub\n• Start a discussion on GitHub Discussions\n• Contact us at awsomelists@gmail.com",
    },
    {
      id: 'open-source',
      question: 'Is AwesomeLists open source?',
      answer:
        "Yes! AwesomeLists is completely open source and we encourage community contributions.\n\nOpen Source Benefits:\n• Full transparency - see exactly how AwesomeLists works\n• Community-driven - anyone can contribute and improve the project\n• Free to use - no licensing costs\n• Customizable - fork and modify for your own needs\n• Community-vetted - contributions are reviewed by the community\n\nYou can find our source code on GitHub. All pull requests are welcome, and we're grateful for contributions from the developer community. We believe in the power of open-source projects and community-driven development.",
    },
    {
      id: 'contact',
      question: 'How can I contact the AwesomeLists team?',
      answer:
        "We'd love to hear from you! Here are the ways you can reach us:\n\n• Email: awsomelists@gmail.com - For general inquiries and feedback\n• GitHub Issues - Report bugs or request features directly\n• GitHub Discussions - Participate in discussions and share ideas with the community\n• GitHub Repository - Browse the source code and stay updated\n• Star the Project - Show your support by starring our repository\n\nWe typically respond to inquiries within 24-48 hours. Your feedback and suggestions are invaluable to us!",
    },
    {
      id: 'file-structure',
      question: 'What files are in the src/data directory?',
      answer:
        'The `src/data/` directory contains the following JSON files:\n\n• awesome-items.json - Contains all the SaaS boilerplates, templates, and tools\n• awsome-item-categories.json - Defines all available categories\n• awsome-item-tags.json - Defines all available tags\n\nWhen submitting a new item, you primarily edit `awesome-items.json`. Make sure to use categories and tags that already exist in their respective files. If you need a new category or tag, please mention it in your Pull Request.',
    },
    {
      id: 'duplicate-items',
      question: "What if I want to submit an item that's similar to an existing one?",
      answer:
        "Great question! If you're considering submitting an item that might be similar to something already in our collection:\n\n1. Check existing items first - Use the search and filters to see if similar items already exist\n2. Review the comparison - If similar items exist, consider what makes your submission unique\n3. Provide context - In your Pull Request, explain what differentiates your item from existing ones\n4. Quality over quantity - We prefer fewer, higher-quality items over many similar options\n\nOur team will review and decide if the item adds unique value. We're looking for items that:\n• Offer unique features or approaches\n• Cover different use cases\n• Provide better solutions than existing options\n• Fill gaps in the collection",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about AwesomeLists
          </p>
        </div>

        {/* Main FAQ Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>General Questions</CardTitle>
            <CardDescription>Learn about AwesomeLists and how to use it</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed whitespace-pre-wrap">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Quick Links Section */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Want to Submit an Item?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">
                Help grow our collection! Submit your favorite SaaS boilerplate, template, or tool
                via a Pull Request.
              </p>
              <Link
                href="https://github.com/victorymakes/awesome"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-block rounded-md px-4 py-2 text-sm font-medium"
              >
                View on GitHub
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Explore LaunchSaaS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">
                Ready to build? Check out LaunchSaaS, our production-ready SaaS starter kit.
              </p>
              <Link
                href="https://launchsaas.org/"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-block rounded-md px-4 py-2 text-sm font-medium"
              >
                Visit LaunchSaaS
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Still have questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Open an issue on GitHub. We're always happy to
              help!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
