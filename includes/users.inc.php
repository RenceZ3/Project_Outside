<?php
    require_once 'db.inc.php';
    
    function checkCredentials() {
        try {
            global $pdo;

            $username = $_POST['username'];
            $password = $_POST['password'];
            
            $queryUsers = "SELECT username, password FROM users WHERE username = :username AND password = :password";
            $stmt = $pdo->prepare($queryUsers);
            $stmt->execute([
                ':username' => $username,
                ':password' => $password
            ]);
    
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
            $rowCount = $stmt->rowCount();
    
            if($rowCount > 0) {
                http_response_code(200);
                echo json_encode(array('success' => true, 'message'=>$username));
            } else {
                http_response_code(401);
                echo json_encode(array('success'=> false, 'message'=>'Invalid Credentials'));
            }
    
        }catch(PDOException $ex) {
            http_response_code(500);
            echo json_encode(array('success'=> false, 'message'=>'Database Error '.$ex->getMessage()));
        }
    }
    checkCredentials();