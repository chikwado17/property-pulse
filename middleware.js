// automatically protects the routes in the application
export { default } from "next-auth/middleware";

// This middleware is used to protect certain routes in the application.
// It checks if the user is authenticated before allowing access to specific pages.
// If the user is not authenticated, they will be redirected to the login page.
// The middleware is applied to the following routes:
// "/properties/add", "/properties/saved", "/profile", and "/messages".
// These routes require authentication to access.
export const config = {
  matcher: ["/properties/add", "/properties/saved", "/profile", "/messages"],
};
