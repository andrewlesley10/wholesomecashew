<?php
/**
 * router.php — Local dev router for PHP built-in server.
 * Mimics .htaccess clean-URL rewrite rules so you can test without Apache.
 *
 * Usage: php -S localhost:8080 router.php
 */

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$root = __DIR__;

// Serve existing static files (css, js, images, fonts, etc.) directly
$filePath = $root . $uri;
if ($uri !== '/' && file_exists($filePath) && !is_dir($filePath)) {
    return false; // Let the built-in server handle it
}

// Clean-URL routing: map /pagename → pagename.html
$routes = ['home', 'capabilities', 'markets', 'careers', 'contact'];

// Root path → home.html
if ($uri === '/') {
    include $root . '/home.html';
    exit;
}

// Strip leading slash and any trailing slash
$page = trim($uri, '/');

// Redirect .html requests to clean URLs
if (preg_match('/^(.+)\.html$/', $page, $m)) {
    $clean = $m[1];
    header('Location: /' . $clean, true, 301);
    exit;
}

// Serve matching page
if (in_array($page, $routes) && file_exists($root . '/' . $page . '.html')) {
    include $root . '/' . $page . '.html';
    exit;
}

// 404
http_response_code(404);
echo "<h1>404 – Page Not Found</h1><p>No route matched: <code>" . htmlspecialchars($uri) . "</code></p>";
