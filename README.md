# AwesomeLists

A curated collection of SaaS boilerplates, templates, libraries, and tools to help you build your projects faster. Whether you're starting a new SaaS product or looking for pre-built solutions, AwesomeLists provides everything you need to accelerate your development process.

## 🎯 About This Project

AwesomeLists was born from a personal need—I was searching for high-quality SaaS boilerplates and templates to speed up development. After collecting and organizing these resources, I've created this platform to help developers like you discover the best tools available.

Since launching this collection, I've also created **[LaunchSaaS](https://launchsaas.org/)**, a growing library of launch-ready SaaS, directory, and AI app templates with Next.js and TanStack Start foundations. Explore it for complete products you can customize with AI coding agents.

## ✨ Features

- 🔍 **Smart Search & Filter** - Easily find boilerplates and templates by category or tags
- 📦 **Comprehensive Collection** - Hundreds of curated SaaS resources
- 🏷️ **Organized by Tags** - Filter by technology stack, framework, and features
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🌙 **Dark Mode Support** - Comfortable viewing in any lighting
- ⚡ **Fast & Lightweight** - Built with Next.js and Tailwind CSS

## 🚀 Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Set `NEXT_PUBLIC_APP_URL` to your site's origin in `.env.local` (for local
development, use `http://localhost:3000`). This value is required by the site's
metadata configuration.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Build

```bash
npm run build
npm start
```

### Validation

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

The catalog tests use Node's built-in TypeScript stripping. They cover keyword
search combined with category and technology filters, pagination bounds, and
empty results.

### Browsing the directory

Search by keyword, then combine a category with one or more technologies. A
resource must match every selected technology. Category and technology changes
apply immediately; submit keywords with Enter or the search arrow. Filters stay
in the URL and are preserved when paging through the results.

Light and dark modes share the same layout and semantic Tailwind theme. The
initial theme follows the system preference, and the header toggle saves an
explicit choice. Shared shadcn controls use the same tokens, including popovers,
focus states, borders, and muted text. Fonts are served locally from
`public/fonts/`, with their license files alongside them.

## 🤝 Contributing

This is an open-source project, and we welcome contributions! The easiest way to add or update items is by submitting a Pull Request.

### How to Submit a New Item

1. **Fork the repository**
2. **Navigate to** `src/data/`
3. **Edit** `awesome-items.json` to add your boilerplate/template
4. **Submit a Pull Request** with a clear description

#### Item Format

```json
{
  "title": "Your Project Name",
  "summary": "A brief description of your project",
  "url": "https://example.com",
  "category": "SaaS Boilerplate",
  "tags": ["Framework", "Library", "Tool", "Technology"],
  "description": "Optional detailed description",
  "image": "Optional image URL"
}
```

**Tips:**

- Choose an appropriate category from the existing list
- Add relevant tags to help others find your project
- Keep summaries concise and informative
- Ensure the URL is working and points to the correct resource

See [FAQ](https://www.awesomelists.link/faq) for more details.

## 📋 Categories

Our collection includes resources for:

- SaaS Boilerplates
- Next.js Templates
- React Components
- Backend Frameworks
- Authentication & Security
- Payment Processing
- Database Solutions
- And many more...

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com)
- **Code Formatting**: [Prettier](https://prettier.io)
- **Deployment**: [OpenNext](https://open-next.js.org) + [Cloudflare Pages](https://pages.cloudflare.com)

## 📚 Resources

### Design workflow

Impeccable is installed locally for Codex in `.agents/skills/impeccable/` using:

```bash
npx impeccable install --providers=codex --scope=project --yes
```

Reload Codex after installing. Review and trust the project hooks in **Settings → Hooks**
(or `/hooks` in the CLI) to enable automatic design checks. The hook definitions
in `.codex/hooks.json` use project-relative paths.

Use `/impeccable init` to capture product context, then scope design requests to the
directory (`src/app/page.tsx`) or FAQ (`src/app/faq/page.tsx`). Live editing is
configured for the shared Next.js layout in `.impeccable/live/config.json`.

Keep product and design records in version control: `PRODUCT.md`, `DESIGN.md`,
`.impeccable/config.json`, `.impeccable/design.json`, `.impeccable/surfaces/`,
`.impeccable/live/config.json`, and `.impeccable/critique/ignore.md` when present.
Do not ignore the entire `.impeccable/` directory; its runtime folders manage
their own exclusions.

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com/docs)
- [Contributing Guidelines](./CONTRIBUTING.md)

## 📝 License

This project is open source and available under the MIT License.

## 💬 Support

Have questions or suggestions? Feel free to:

- Open an issue on GitHub
- Submit a pull request with improvements

## 🔗 Related Projects

- [LaunchSaaS](https://launchsaas.org/) - A production-ready SaaS starter kit

---

Made with ❤️ by Victory
