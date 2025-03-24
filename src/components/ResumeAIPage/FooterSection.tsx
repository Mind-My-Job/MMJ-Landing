import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import LaunchUI from "~/components/logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "~/components/ui/footer";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-6">
      <div className="mx-auto max-w-container">
        <Footer className="border-t pt-8">
          <FooterContent className="sm:grid-cols-2 md:grid-cols-3">
            <FooterColumn className="col-span-2 flex-row items-center justify-between gap-8 border-b pb-8 md:col-span-1 md:flex-col md:items-start md:justify-start md:border-b-0">
              <div className="flex items-center gap-2">
                <LaunchUI />
                <h3 className="text-xl font-bold">MindMyJob</h3>
              </div>
              <div className="ml-2.5 flex gap-4 sm:ml-0">
                <Link href="/" className="text-muted-foreground">
                  <span className="sr-only">GitHub</span>
                  <GitHubLogoIcon className="h-5 w-5" />
                </Link>
                <Link href="/" className="text-muted-foreground">
                  <span className="sr-only">Twitter</span>
                  <TwitterLogoIcon className="h-5 w-5" />
                </Link>
                <Link href="/" className="text-muted-foreground">
                  <span className="sr-only">Discord</span>
                  <DiscordLogoIcon className="h-5 w-5" />
                </Link>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              <Link href="#" className="text-sm text-muted-foreground">
                Changelog
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Documentation
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <Link href="#" className="text-sm text-muted-foreground">
                About
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Careers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Blog
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <Link href="#" className="text-sm text-muted-foreground">
                Discord
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Twitter
              </Link>
              <Link href="/" className="text-sm text-muted-foreground">
                Github
              </Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Legal</h3>
              <Link href="#" className="text-sm text-muted-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground">
                Cookie Policy
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom className="border-0">
            <div>© 2025 MMJ. All rights reserved</div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
