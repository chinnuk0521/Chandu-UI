# Contributing to Chandu UI

**Last Updated: November 2025**

Thank you for your interest in contributing to Chandu UI! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Questions?](#questions)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Chandu-UI.git
   cd Chandu-UI
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/chinnuk0521/Chandu-UI.git
   ```

## Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Build the library**:
   ```bash
   npm run build:lib
   ```

4. **Run linting**:
   ```bash
   npm run lint
   ```

## Making Changes

### Branch Naming

Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
# or
git checkout -b docs/your-documentation-update
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates
- `style/` - Code style changes (formatting, etc.)

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(Button): add loading state prop

Add a loading prop to the Button component that displays a spinner
when the button is in a loading state.

Closes #123
```

```
fix(Header): resolve mobile menu overflow issue

The mobile menu was overflowing on small screens. This fix adds
proper overflow handling.

Fixes #456
```

## Pull Request Process

1. **Update your branch**:
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase upstream/main
   ```

2. **Ensure all tests pass**:
   ```bash
   npm run lint
   npm run build:lib
   ```

3. **Push your changes**:
   ```bash
   git push origin your-branch
   ```

4. **Create a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Reference any related issues
   - Provide a detailed description of your changes
   - Include screenshots for UI changes
   - Ensure all CI checks pass

5. **Respond to feedback**:
   - Address review comments promptly
   - Make requested changes
   - Keep the PR updated with the latest main branch

### PR Checklist

Before submitting a PR, ensure:

- [ ] Code follows the project's coding standards
- [ ] All tests pass locally
- [ ] Linting passes without errors
- [ ] Documentation is updated (if needed)
- [ ] Commit messages follow conventional commits
- [ ] Branch is up to date with main
- [ ] No merge conflicts
- [ ] Changes are focused and atomic

## Coding Standards

### JavaScript/React

- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Use PropTypes or TypeScript for type checking

### CSS

- Use CSS variables for theming
- Follow BEM naming conventions where appropriate
- Ensure mobile responsiveness
- Use semantic class names
- Keep styles modular and component-scoped

### File Structure

```
src/
  components/
    ComponentName/
      ComponentName.jsx
      ComponentName.css
      index.js
```

## Testing

- Write tests for new features
- Ensure existing tests still pass
- Test on multiple browsers and devices
- Test responsive design on mobile devices

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for new functions/components
- Update component examples if API changes
- Keep CHANGELOG.md updated

## Questions?

- Open an [issue](https://github.com/chinnuk0521/Chandu-UI/issues) for questions
- Check existing issues and discussions
- Review the [README.md](README.md) for project overview

## Recognition

Contributors will be:
- Listed in the project's contributors
- Credited in release notes for significant contributions
- Acknowledged in the project documentation

Thank you for contributing to Chandu UI! 🎉

