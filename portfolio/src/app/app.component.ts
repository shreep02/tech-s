import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly cvUrl =
    'https://1drv.ms/b/c/d8855e6f09d47f85/IQAP0s_R9mCPRZi5Vgyqazj7AaJAKG9SpURdxtINJVhGSfQ?e=l7kOue';
  readonly formspreeEndpoint = 'https://formspree.io/f/xdenyawn';

  cvRequestOpen = false;
  cvForm = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  openCvRequest(): void {
    this.cvRequestOpen = true;
  }

  closeCvRequest(): void {
    this.cvRequestOpen = false;
  }

  async submitCvRequest(): Promise<void> {
    const entry = {
      ...this.cvForm,
      requestedAt: new Date().toISOString(),
      formType: 'cv_request',
    };

    const isFormspreeConfigured =
      !this.formspreeEndpoint.includes('your-form-id');

    try {
      if (isFormspreeConfigured) {
        await fetch(this.formspreeEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(entry),
        });
      }
    } catch {
      this.saveCvRequestLocally(entry);
    }

    if (!isFormspreeConfigured) {
      this.saveCvRequestLocally(entry);
    }

    this.cvForm = {
      name: '',
      email: '',
      company: '',
      message: '',
    };
    this.cvRequestOpen = false;

    window.open(this.cvUrl, '_blank', 'noopener,noreferrer');
  }

  private saveCvRequestLocally(entry: Record<string, string>): void {
    const existing = this.getStoredCvRequests();
    existing.push(entry);
    localStorage.setItem('cvRequests', JSON.stringify(existing));
  }

  private getStoredCvRequests(): Array<Record<string, string>> {
    if (typeof localStorage === 'undefined') {
      return [];
    }

    try {
      const stored = localStorage.getItem('cvRequests');
      return stored
        ? (JSON.parse(stored) as Array<Record<string, string>>)
        : [];
    } catch {
      return [];
    }
  }
}
