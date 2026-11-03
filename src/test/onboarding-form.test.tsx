import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { OnboardingForm, sharedGroups } from "@/components/site/onboarding-form";

// The client's rule: a half-filled onboarding must still go through. Only the two
// fields we need to contact them stay mandatory; everything else is optional.
describe("Onboarding form submission", () => {
  const groups = sharedGroups;

  it("marks only name and email as mandatory", () => {
    render(<OnboardingForm eyebrow="Test" title="Test form" intro="Intro" groups={groups} />);

    const required = groups
      .flatMap((g) => g.fields)
      .filter((f) => f.required)
      .map((f) => f.name);

    expect(required).toEqual(["full_name", "email"]);
  });

  it("leaves every other question free to leave blank", () => {
    render(<OnboardingForm eyebrow="Test" title="Test form" intro="Intro" groups={groups} />);

    for (const name of ["company", "phone", "website", "niches", "offer", "icp_industry", "icp_size"]) {
      const field = document.querySelector<HTMLElement>(`[name="${name}"]`);
      expect(field, name).not.toHaveAttribute("required");
    }
  });

  it("accepts a half-typed website link instead of blocking submit", () => {
    render(<OnboardingForm eyebrow="Test" title="Test form" intro="Intro" groups={groups} />);

    const website = document.querySelector<HTMLInputElement>('[name="website"]');
    expect(website?.type).toBe("text");
  });

  it("submits with only name and email filled in", () => {
    render(<OnboardingForm eyebrow="Test" title="Test form" intro="Intro" groups={groups} />);

    fireEvent.change(screen.getByLabelText(/Your full name/i), { target: { value: "Zia" } });
    fireEvent.change(screen.getByLabelText(/^Email/i), { target: { value: "zia@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /Submit onboarding/i }));

    expect(screen.getByText("Onboarding received")).toBeInTheDocument();
  });
});
