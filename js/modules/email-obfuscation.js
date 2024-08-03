export default class EmailObfuscation {
  constructor(emails, user, domain) {
    this.emails = document.querySelectorAll(emails);
    this.user = user;
    this.domain = domain;
  }

  obfuscate() {
    this.emails.forEach((el) => {
      el.setAttribute("href", `mailto:${this.user}@${this.domain}`);
    });
  }

  init() {
    if (this.emails.length) {
      this.obfuscate();
    }

    return this;
  }
}
