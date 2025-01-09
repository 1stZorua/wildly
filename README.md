# Wildly

Wildly is a smart application that helps dog owners, veterinarians, and dog shelters quickly identify a dog's breed by scanning a photo.

## Figma Design

The design of Wildly prioritizes a clean, intuitive interface for easy dog breed identification. For detailed design elements and prototypes, please refer to the [Figma design](https://www.figma.com/design/peRsT7RJmRIWobyPbFhuko/Wildly?node-id=0-1&t=hVN6FmVQlZs3Yaao-1).

## Packages

- **clsx**
- **svelte-sonner**
- **sveltekit-flash-message**
- **tailwind-merge**
- **tailwindcss**
- **tailwind-variants**
- **typescript**

## Folder Structure

```bash
src/
├── lib/
│   ├── components/      # Reusable UI components
│   │   ├── layout/      # Layout components (e.g., header, footer)
│   │   ├── page/        # Page components (e.g., layout, wrapper)
│   │   └── shared/      # Shared UI components (e.g., buttons, modals)
│   ├── images/          # Image assets
│   ├── types/           # TypeScript types/interfaces
│   └── utils/           # Utility functions and helpers
```

## Features

- **Breed Identification:** Quickly identify a dog's breed by scanning a photo with the Wildly application.

- **User-Friendly Interface:** Intuitive design to help dog owners, veterinarians, and shelters easily use the app.

- **Backend Integration:** Robust integration with a custom-trained AI model to process images and classify dog breeds.

## Getting Started

```bash
npm install
npm run dev
```
