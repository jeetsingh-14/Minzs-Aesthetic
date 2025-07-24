# Git Workflow for Minzs Aesthetics Website

This document outlines the Git branching strategy and workflow for the Minzs Aesthetics website project.

## Branch Structure

The repository is organized with the following branches:

1. **main** - The stable production branch
   - Contains the stable, production-ready code
   - Should always be deployable
   - Protected from direct commits; changes come through pull requests

2. **frontend** - UI components and pages
   - For development of React components, pages, and UI-related features
   - Examples: Navbar, Footer, ServiceCard, page layouts, styling

3. **api-integration** - API integrations
   - For Instagram API integration and other external service integrations
   - Examples: fetch_instagram_example.js, InstagramGallery component

4. **assets** - Static assets
   - For managing images, logos, icons, and other static assets
   - Examples: logo.png, service images, gallery photos

5. **documentation** - Documentation files
   - For README updates and other documentation
   - Examples: README.md, installation guides, API documentation

## Workflow Guidelines

### Starting Work on a New Feature

1. Always start from the latest version of the main branch:
   ```
   git checkout main
   git pull origin main
   ```

2. Create a feature branch from the appropriate category branch:
   ```
   git checkout frontend
   git pull origin frontend
   git checkout -b feature/new-contact-form
   ```

3. Make your changes, commit frequently with descriptive messages:
   ```
   git add .
   git commit -m "Add form validation to contact form"
   ```

4. Push your feature branch to the remote repository:
   ```
   git push origin feature/new-contact-form
   ```

5. When the feature is complete, create a pull request to merge into the appropriate category branch (e.g., frontend).

6. After review and approval, merge the feature branch into the category branch.

### Merging Changes to Main

1. Periodically, category branches should be merged into main:
   ```
   git checkout main
   git pull origin main
   git merge frontend
   git push origin main
   ```

2. This should be done after thorough testing and code review.

### Handling Conflicts

1. If you encounter merge conflicts:
   ```
   git status
   ```

2. Resolve conflicts in the affected files.

3. After resolving:
   ```
   git add .
   git commit -m "Resolve merge conflicts"
   ```

## Best Practices

1. **Commit Messages**: Write clear, descriptive commit messages that explain what changes were made and why.

2. **Pull Requests**: Use pull requests for code review before merging into category branches or main.

3. **Branch Naming**:
   - Feature branches: `feature/descriptive-name`
   - Bug fixes: `bugfix/issue-description`
   - Hotfixes: `hotfix/critical-issue`

4. **Code Review**: All code should be reviewed before merging into category branches or main.

5. **Testing**: Test your changes thoroughly before creating a pull request.

6. **Documentation**: Update documentation when making significant changes.

## Deployment Process

1. Only deploy from the main branch.

2. Before deployment:
   - Ensure all tests pass
   - Perform a final code review
   - Update version numbers if applicable

3. Tag releases with version numbers:
   ```
   git tag -a v1.0.0 -m "Version 1.0.0"
   git push origin v1.0.0
   ```

## Questions?

If you have questions about this workflow, please contact the project maintainer.