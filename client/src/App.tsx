/** Editorial Terminal: a route-first independent site shell with clear escape routes and accessible interactions. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HubPage from "./pages/HubPage";
import CalculatorPage from "./pages/CalculatorPage";
import StaticPage from "./pages/StaticPage";
import ArticlePage from "./pages/ArticlePage";
import GuideArticlePage from "./pages/GuideArticlePage";
import KeywordLandingPage from "./pages/KeywordLandingPage";
import TopicAuthorityPage from "./pages/TopicAuthorityPage";

function MissingRouteRedirect() {
  const [, navigate] = useLocation();
  useEffect(() => { navigate("/", { replace: true }); }, [navigate]);
  return null;
}

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/business-software/"><HubPage hubKey="business-software" /></Route>
    <Route path="/ai-tools/"><HubPage hubKey="ai-tools" /></Route>
    <Route path="/free-tools/"><HubPage hubKey="free-tools" /></Route>
    <Route path="/reviews/"><HubPage hubKey="reviews" /></Route>
    <Route path="/comparisons/"><HubPage hubKey="comparisons" /></Route>
    <Route path="/business-guides/"><HubPage hubKey="business-guides" /></Route>
    <Route path="/topic-authority/" component={TopicAuthorityPage} />
    <Route path="/business-guides/:slug">{(params) => <GuideArticlePage slug={params.slug} />}</Route>
    <Route path="/business-software-solutions/"><KeywordLandingPage slug="business-software-solutions" /></Route>
    <Route path="/cloud-business-software/"><KeywordLandingPage slug="cloud-business-software" /></Route>
    <Route path="/software-for-small-business/"><KeywordLandingPage slug="software-for-small-business" /></Route>
    <Route path="/business-productivity-software/"><KeywordLandingPage slug="business-productivity-software" /></Route>
    <Route path="/business-management-software/"><KeywordLandingPage slug="business-management-software" /></Route>
    <Route path="/small-business-software/"><KeywordLandingPage slug="small-business-software" /></Route>
    <Route path="/crm-for-small-business/"><KeywordLandingPage slug="crm-for-small-business" /></Route>
    <Route path="/best-crm-for-small-business/"><KeywordLandingPage slug="best-crm-for-small-business" /></Route>
    <Route path="/free-crm-for-small-business/"><KeywordLandingPage slug="free-crm-for-small-business" /></Route>
    <Route path="/simple-crm-software/"><KeywordLandingPage slug="simple-crm-software" /></Route>
    <Route path="/crm-software-for-startups/"><KeywordLandingPage slug="crm-software-for-startups" /></Route>
    <Route path="/crm-software-comparison/"><KeywordLandingPage slug="crm-software-comparison" /></Route>
    <Route path="/best-free-crm-software/"><KeywordLandingPage slug="best-free-crm-software" /></Route>
    <Route path="/business-tools/"><KeywordLandingPage slug="business-tools" /></Route>
    <Route path="/digital-tools/"><KeywordLandingPage slug="digital-tools" /></Route>
    <Route path="/online-business-tools/"><KeywordLandingPage slug="online-business-tools" /></Route>
    <Route path="/free-business-tools/"><KeywordLandingPage slug="free-business-tools" /></Route>
    <Route path="/ai-tools-for-small-business/"><KeywordLandingPage slug="ai-tools-for-small-business" /></Route>
    <Route path="/business-automation-tools/"><KeywordLandingPage slug="business-automation-tools" /></Route>
    <Route path="/productivity-tools/"><KeywordLandingPage slug="productivity-tools" /></Route>
    <Route path="/accounting-software/"><KeywordLandingPage slug="accounting-software" /></Route>
    <Route path="/crm-software/"><KeywordLandingPage slug="crm-software" /></Route>
    <Route path="/invoicing-software/"><KeywordLandingPage slug="invoicing-software" /></Route>
    <Route path="/payroll-software/"><KeywordLandingPage slug="payroll-software" /></Route>
    <Route path="/project-management-software/"><KeywordLandingPage slug="project-management-software" /></Route>
    <Route path="/email-marketing-software/"><KeywordLandingPage slug="email-marketing-software" /></Route>
    <Route path="/booking-software/"><KeywordLandingPage slug="booking-software" /></Route>
    <Route path="/website-builders/"><KeywordLandingPage slug="website-builders" /></Route>
    <Route path="/tools/:slug">{(params) => <CalculatorPage slug={params.slug} />}</Route>
    <Route path="/reviews/:slug">{(params) => <ArticlePage slug={params.slug} />}</Route>
    <Route path="/comparisons/:slug">{(params) => <ArticlePage slug={params.slug} />}</Route>
    <Route path="/about/"><StaticPage pageKey="about" /></Route>
    <Route path="/contact/"><StaticPage pageKey="contact" /></Route>
    <Route path="/editorial-policy/"><StaticPage pageKey="editorial-policy" /></Route>
    <Route path="/privacy-policy/"><StaticPage pageKey="privacy-policy" /></Route>
    <Route path="/cookie-policy/"><StaticPage pageKey="cookie-policy" /></Route>
    <Route path="/terms-conditions/"><StaticPage pageKey="terms-conditions" /></Route>
    <Route path="/affiliate-disclosure/"><StaticPage pageKey="affiliate-disclosure" /></Route>
    <Route path="/advertising-disclosure/"><StaticPage pageKey="advertising-disclosure" /></Route>
    <Route path="/:slug/"><MissingRouteRedirect /></Route>
    <Route path="/404"><MissingRouteRedirect /></Route>
    <Route><MissingRouteRedirect /></Route>
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
