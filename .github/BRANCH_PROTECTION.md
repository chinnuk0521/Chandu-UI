# Branch Protection Settings

This document outlines the recommended branch protection settings for the Chandu UI repository. These settings should be configured in the GitHub repository settings.

## Required Settings for `main` and `master` Branches

### Basic Protection Rules

1. **Require a pull request before merging**
   - ✅ Require approvals: **1** (minimum)
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require review from Code Owners (if CODEOWNERS file exists)

2. **Require status checks to pass before merging**
   - ✅ Require branches to be up to date before merging
   - ✅ Required status checks:
     - `CI / lint`
     - `CI / build`
     - `CodeQL Security Analysis / Analyze`

3. **Require conversation resolution before merging**
   - ✅ Require all conversations on code to be resolved

4. **Restrict who can push to matching branches**
   - ✅ Restrict pushes that create matching branches
   - ✅ Allow specified actors to bypass required pull requests

5. **Do not allow bypassing the above settings**
   - ✅ Do not allow bypassing the above settings

### Additional Settings

6. **Require signed commits**
   - ✅ Require signed commits (optional but recommended)

7. **Require linear history**
   - ✅ Require linear history (optional but recommended)

8. **Include administrators**
   - ✅ Enforce all configured restrictions for administrators

## How to Configure

1. Go to your repository on GitHub
2. Click on **Settings** → **Branches**
3. Click **Add rule** or edit existing rule for `main` and `master`
4. Configure the settings as described above
5. Click **Create** or **Save changes**

## Security Features to Enable

### 1. Secret Scanning

GitHub automatically scans for secrets in public repositories. For private repositories:

1. Go to **Settings** → **Security** → **Code security and analysis**
2. Enable **Secret scanning**
3. Enable **Push protection** (recommended)

### 2. Dependency Review

1. Go to **Settings** → **Security** → **Code security and analysis**
2. Enable **Dependency review**

### 3. Dependabot Alerts

1. Go to **Settings** → **Security** → **Code security and analysis**
2. Enable **Dependabot alerts**
3. Enable **Dependabot security updates**

### 4. Code Scanning

Already configured via CodeQL workflow (`.github/workflows/codeql.yml`)

1. Go to **Settings** → **Security** → **Code security and analysis**
2. Ensure **Code scanning** is enabled
3. The CodeQL workflow will automatically run

## Verification

After configuring these settings:

1. Try to push directly to `main` or `master` - should be blocked
2. Create a pull request - should require approval
3. Check that CI checks are required before merging
4. Verify that CodeQL scans are running

## Notes

- These settings help ensure code quality and security
- They prevent accidental pushes to main branches
- They enforce code review and testing before merging
- They enable automated security scanning

For more information, see:
- [GitHub Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [GitHub Security Features](https://docs.github.com/en/code-security)

