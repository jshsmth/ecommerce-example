import { Button } from "@repo/ui/button";
// import styles from "./page.module.css";

// Import the Tailwind CSS
import "@repo/ui/styles";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tailwind UI Components Demo</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button appName="web" variant="primary">
            Primary Button
          </Button>
          <Button appName="web" variant="secondary">
            Secondary Button
          </Button>
          <Button appName="web" variant="outline">
            Outline Button
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button appName="web" size="sm">
            Small Button
          </Button>
          <Button appName="web" size="md">
            Medium Button
          </Button>
          <Button appName="web" size="lg">
            Large Button
          </Button>
        </div>
      </div>
    </div>
  );
}
