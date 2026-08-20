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

  cvRequestOpen = false;
  contactFormOpen = false;
  cvSubmitting = false;
  cvStatus: 'idle' | 'success' | 'error' = 'idle';
  cvStatusMessage = '';
  cvForm = {
    name: '',
    email: '',
    company: '',
    message: '',
  };
  contactForm = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  openContact(): void {
    this.contactFormOpen = true;
  }

  closeContact(): void {
    this.contactFormOpen = false;
    this.contactForm = {
      name: '',
      email: '',
      company: '',
      message: '',
    };
  }

  openCvRequest(): void {
    this.cvRequestOpen = true;
    this.cvStatus = 'idle';
    this.cvStatusMessage = '';
  }

  closeCvRequest(): void {
    this.cvRequestOpen = false;
    this.cvSubmitting = false;
    this.cvStatus = 'idle';
    this.cvStatusMessage = '';
    this.cvForm = {
      name: '',
      email: '',
      company: '',
      message: '',
    };
  }

  async submitContactForm(event: Event): Promise<void> {
    event.preventDefault();

    const entry = {
      ...this.contactForm,
      requestedAt: new Date().toISOString(),
      formType: 'contact_request',
    };

    this.saveCvRequestLocally(entry);

    this.contactForm = {
      name: '',
      email: '',
      company: '',
      message: '',
    };
    this.contactFormOpen = false;
  }

  async submitCvRequest(event: Event): Promise<void> {
    event.preventDefault();
    if (this.cvSubmitting) {
      return;
    }

    this.cvSubmitting = true;
    this.cvStatus = 'idle';
    this.cvStatusMessage = '';

    const entry = {
      ...this.cvForm,
      requestedAt: new Date().toISOString(),
      formType: 'cv_request',
    };
    this.saveCvRequestLocally(entry);
    window.open(this.cvUrl, '_blank', 'noopener,noreferrer');

    this.cvForm = {
      name: '',
      email: '',
      company: '',
      message: '',
    };
    this.cvStatus = 'success';
    this.cvStatusMessage = 'Your CV is opening in a new tab.';
    this.cvSubmitting = false;
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
