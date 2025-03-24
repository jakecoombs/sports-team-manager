import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function IntroCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          Create a dockerized web application with:
          <ul className="list-inside list-disc">
            <li>Next.js v15</li>
            <li>TypeScript</li>
            <li>ESLint v9</li>
            <li>Prettier</li>
            <li>Tailwind CSS</li>
            <li>Shadcn</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild variant="outline">
          <Link href="https://github.com/jakecoombs/docker-nextjs-template">
            Clone Template
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
