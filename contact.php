<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get and clean form values
    // Handle JSON input as well as form-data
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';

    if (strpos($contentType, "application/json") !== false) {
        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        
        $name    = trim($decoded['name'] ?? '');
        $company = trim($decoded['company'] ?? '');
        $email   = trim($decoded['email'] ?? '');
        $phone   = trim($decoded['phone'] ?? '');
        $subjectText = trim($decoded['subject'] ?? 'Sales & Export Inquiry');
        $message = trim($decoded['message'] ?? '');
    } else {
        // Fallback for standard POST
        $name    = trim($_POST['name'] ?? '');
        $company = trim($_POST['company'] ?? '');
        $email   = trim($_POST['email'] ?? '');
        $phone   = trim($_POST['phone'] ?? '');
        $subjectText = trim($_POST['subject'] ?? 'Sales & Export Inquiry');
        $message = trim($_POST['message'] ?? '');
    }

    // Basic validation (server-side) — require name, email and message only
    if ($name === '' || $email === '' || $message === '') {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Missing required fields. Please fill out name, email, and requirements.']);
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
        exit;
    }

    // Send to wholesomecashew.lk sales address as requested
    $to = "info@wholesomecashew.lk";

    $subject = "Wholesome Cashew Website B2B Enquiry: $subjectText - From $name";

    $body  = "You have received a new contact submission from wholesomcashew.lk.\n\n";
    $body .= "--- SENDER DETAILS ---\n";
    $body .= "Name:     $name\n";
    $body .= "Company:  $company\n";
    $body .= "Email:    $email\n";
    $body .= "Phone:    $phone\n";
    $body .= "Subject:  $subjectText\n\n";
    $body .= "--- SENDER MESSAGE ---\n";
    $body .= "$message\n";

    // Email headers
    $headers  = "From: Wholesome Cashew Website Enquiry <info@wholesomecashew.lk>\r\n";
    // Only set Reply-To if the provided email is valid
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $headers .= "Reply-To: $email\r\n";
    }
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

    // Attempt to send email using PHP's native mail() function
    // Check if we are running in a local development environment to avoid blocking/hanging when mail server is not configured
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $isLocalhost = (strpos($host, 'localhost') !== false) || (strpos($host, '127.0.0.1') !== false);

    $mailSent = false;
    if ($isLocalhost) {
        $mailSent = true;
    } else {
        $mailSent = @mail($to, $subject, $body, $headers);
    }

    if ($mailSent) {
        echo json_encode([
            'success' => true, 
            'message' => 'Thank you for your message! Your enquiry regarding ' . htmlspecialchars($subjectText) . ' has been sent to info@wholesomecashew.lk. We will get back to your company representatives soon.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Sorry, we could not send your message via PHP mail. Please try sending directly to info@wholesomecashew.lk.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
}
?>
