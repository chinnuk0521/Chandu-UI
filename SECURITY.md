# Security Policy

**Last Updated: November 2025**

## Supported Versions

We actively support security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Chandu UI seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of the following methods:

1. **Email**: Send details to [security@chanduui.com] (or your preferred security contact email)
2. **GitHub Security Advisory**: Use GitHub's [Private Vulnerability Reporting](https://github.com/chinnuk0521/Chandu-UI/security/advisories/new)

### What to Include

When reporting a vulnerability, please include:

- **Type of vulnerability** (e.g., XSS, CSRF, SQL injection, etc.)
- **Full paths of source file(s) related to the vulnerability**
- **Location of the affected code** (tag/branch/commit or direct URL)
- **Step-by-step instructions to reproduce the issue**
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the vulnerability** (what an attacker might achieve)
- **Suggested fix** (if you have one)

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Resolution**: Depends on severity and complexity

### Responsible Disclosure

We follow responsible disclosure practices:

1. We will acknowledge receipt of your vulnerability report within 48 hours
2. We will provide an initial assessment within 7 days
3. We will keep you informed of our progress
4. We will notify you when the vulnerability has been fixed
5. We will credit you in our security advisories (unless you prefer to remain anonymous)

### Security Best Practices

When using Chandu UI in production:

- Always keep dependencies up to date
- Review and audit your code regularly
- Use Content Security Policy (CSP) headers
- Implement proper authentication and authorization
- Follow React security best practices
- Regularly review the [CHANGELOG.md](CHANGELOG.md) for security updates

### Security Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2) and will be documented in:

- [CHANGELOG.md](CHANGELOG.md)
- GitHub Security Advisories
- Release notes

### Recognition

We believe in recognizing security researchers who help us keep Chandu UI secure. With your permission, we will:

- Credit you in our security advisories
- Add you to our security acknowledgments
- Thank you publicly (if you wish)

Thank you for helping keep Chandu UI and its users safe!

