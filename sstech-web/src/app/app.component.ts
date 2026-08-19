import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="site-shell">
      <header class="site-header">
        <a class="brand" href="#top" aria-label="SSTech home">
          <img src="/icon.png" alt="" />
          <span>SSTech</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a class="header-cta" href="#contact"
          >Get in touch <span aria-hidden="true">↗</span></a
        >
      </header>

      <main id="top">
        <section class="hero">
          <img class="hero-background" src="/webpage.png" alt="" />
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <p class="eyebrow">Software development · Quality engineering</p>
            <h1>Build boldly.<br /><span>Deliver reliably.</span></h1>
            <p class="hero-summary">
              SSTech helps businesses turn complex software delivery into clear,
              dependable progress through thoughtful engineering and practical
              quality systems.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#services"
                >Explore services <span aria-hidden="true">↓</span></a
              >
              <a class="button button-ghost" href="#contact"
                >Talk to SSTech <span aria-hidden="true">↗</span></a
              >
            </div>
          </div>
          <div class="hero-stamp">
            <span>01</span><span class="stamp-line"></span
            ><span>Engineering with intent</span>
          </div>
        </section>

        <section class="intro content-width" id="approach">
          <div class="section-label">
            <span>01</span><span>Why SSTech</span>
          </div>
          <div class="intro-copy">
            <p class="display-copy">
              Good software is more than a feature that works once. It is a
              system teams can understand, trust, and improve.
            </p>
            <p class="muted-copy">
              We bring development and quality engineering together across web
              applications, integrations, automation, UAT, and device testing so
              delivery feels less uncertain.
            </p>
          </div>
        </section>

        <section class="services content-width" id="services">
          <div class="section-heading">
            <div class="section-label">
              <span>02</span><span>What we do</span>
            </div>
            <h2>Capability that<br /><span>moves work forward.</span></h2>
          </div>
          <div class="service-list">
            <article class="service-item">
              <span class="service-number">01</span>
              <div>
                <h3>Web development</h3>
                <p>
                  Modern, maintainable web applications shaped around real
                  operational needs.
                </p>
              </div>
              <span class="service-arrow" aria-hidden="true">↗</span>
            </article>
            <article class="service-item">
              <span class="service-number">02</span>
              <div>
                <h3>Test automation</h3>
                <p>
                  Reliable automated coverage that gives teams faster, clearer
                  release feedback.
                </p>
              </div>
              <span class="service-arrow" aria-hidden="true">↗</span>
            </article>
            <article class="service-item">
              <span class="service-number">03</span>
              <div>
                <h3>API and integration testing</h3>
                <p>
                  Confidence across the services, data flows, and integrations
                  your product depends on.
                </p>
              </div>
              <span class="service-arrow" aria-hidden="true">↗</span>
            </article>
            <article class="service-item">
              <span class="service-number">04</span>
              <div>
                <h3>UAT and device testing</h3>
                <p>
                  Human-centred validation across environments, devices, and the
                  journeys users rely on.
                </p>
              </div>
              <span class="service-arrow" aria-hidden="true">↗</span>
            </article>
          </div>
        </section>

        <section class="closing content-width">
          <div class="closing-card">
            <img src="/icon.png" alt="" />
            <p class="eyebrow">The SSTech standard</p>
            <h2>Make quality<br /><span>part of the build.</span></h2>
            <a class="button button-light" href="#contact"
              >See how we work <span aria-hidden="true">↓</span></a
            >
          </div>
        </section>

        <section class="contact content-width" id="contact">
          <p class="eyebrow">Have a project in mind?</p>
          <h2>Let’s make it<br /><span>dependable.</span></h2>
          <form
            class="contact-form"
            action="https://formspree.io/f/xdenyawn"
            method="POST"
          >
            <div class="form-row">
              <label
                ><span>Your name</span
                ><input type="text" name="name" autocomplete="name" required
              /></label>
              <label
                ><span>Your email</span
                ><input type="email" name="email" autocomplete="email" required
              /></label>
            </div>
            <label
              ><span>Company</span
              ><input type="text" name="company" autocomplete="organization"
            /></label>
            <label
              ><span>How can we help?</span
              ><textarea name="message" rows="5" required></textarea>
            </label>
            <input type="hidden" name="_subject" value="New SSTech enquiry" />
            <button class="button button-primary" type="submit">
              Get in touch <span aria-hidden="true">↗</span>
            </button>
          </form>
        </section>
      </main>

      <footer class="site-footer content-width">
        <a class="footer-brand" href="#top"
          ><img src="/icon.png" alt="" /><span>SSTech</span></a
        >
        <p>Software development and quality engineering for better delivery.</p>
        <div class="footer-links">
          <a href="#services">Services</a><a href="#contact">Contact</a
          ><a href="#contact">Get in touch</a>
        </div>
        <small>© 2026 SSTech BV · Zwevegem, Belgium</small>
      </footer>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const targetId = window.location.hash.slice(1);

    if (!targetId) {
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
