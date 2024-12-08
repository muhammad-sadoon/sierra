<?php
    $host = "localhost";
    $server ="root";
    $password = "";
    $database = "sierra";
    $conn = mysqli_connect($host, $server,$password,$database);
    ?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section class="mainpage-8">
        <div class="navbar hidden-navbar">
            <div class="logo">
                <img src="img/logo.png" alt="">
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="index02.html">ABOUT US</a></li>
                    <li><a href="index03.html">SERVICE</a></li>
                    <li><a href="index04.html">PORTFOLIO</a></li>
                    <li><a href="#">BLOG &#x2193</a>
                        <ul>
                            <li><a href="index05.html">BLOG</a></li>
                            <li><a href="index06.html">BLOG DETAILS</a></li>
                            <li><a href="index07.php">ELEMNETS</a></li>
                        </ul>
                    </li>
                    <li><a href="index08.html" id="content-nav">CONTENT</a></li>
                </ul>
            </nav>
        </div>
        <div class="navbar ">
            <div class="logo">
                <img src="img/logo.png" alt="">
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="index02.html">ABOUT US</a></li>
                    <li><a href="index03.html">SERVICE</a></li>
                    <li><a href="index04.html">PORTFOLIO</a></li>
                    <li><a href="index05.html">BLOG &#x2193</a>
                        <ul>
                            <li><a href="index05.html" class="ml-5">BLOG</a></li>
                            <li><a href="index06.html" class="ml-5">BLOG DETAILS</a></li>
                            <li><a href="index07.php" class="ml-5">ELEMNETS</a></li>
                        </ul>
                    </li>
                    <li><a href="index08.html" id="content-nav">CONTENT</a></li>
                </ul>
            </nav>
        </div>
        <div class="heading-about-us intro-page-1">
            <h1 class="heading-blog">Contact</h1>
            <span class="page-1-heading">Get to touch</span>
        </div>
    </section>
    <section class="mainpage-5">
        <div class="form">
                <form action='<?php echo $_SERVER["PHP_SELF"];?>' method="post">
                <input type='text' placeholder='Name' name='myname' id='name' required/>
                <input type='email' placeholder='Email' name='myemail' id='email' required/>
                <input type='text' placeholder='subject*' name='subject' id='subject' required/>
                <textarea placeholder='massage' name='textarea' id='textarea' required></textarea>
                <button><input type='submit' name="btn" id="insertform" style="background-color: transparent; font-size:25px;
                border:none; color:white; margin-top:-20px; cursor:pointer" value="submit now"></button>
                </form>
        </div>
        <div class="intro-from">
            <img src="img/title-icon.png" alt="">
            <span>SAY HELLO</span>
            <h1>Get in touch, send us an e-mail or call us</h1>
            <p>Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit
                dolor. Donec elementum velit a orci facilisis rutrum.</p>
            <h4>Call us now</h4>
            <h3>+92 345 4131372</h3>
        </div>
    </section>
    <div class="mainpage-7 mt-24">
        <footer>
            <div class="intro-footer">
                <img src="img/footer-logo.png" alt="">
                <p>Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel
                    suscipit
                    dolor. Donec elementum velit a orci facilisis rutrum.</p>
            </div>
            <div class="intro-insta">
                <span>Instagram</span>
                <div class="footer-images">
                    <img src="img/ins-1.jpg" class="h-20 w-64" alt="">
                    <img src="img/ins-2.jpg" class="h-20 w-64" alt="">
                    <img src="img/ins-3.jpg" class="h-20 w-64" alt="">
                    <img src="img/ins-4.jpg" class="h-20 w-64" alt="">
                    <img src="img/ins-5.jpg" class="h-20 w-64" alt="">
                    <img src="img/ins-6.jpg" class="h-20 w-64" alt="">
                    <img src="img/ins-7.jpg" class="h-20 w-64" alt="">
                    <img src="img/ins-8.jpg" class="h-20 w-64" alt="">
                </div>
            </div>
            <div class="subscribe">
                <div class="f_title">
                    <h3>Subscribe to newsletter</h3>
                </div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Your e-mail address here"
                        aria-label="Your e-mail address here">
                    <span class="input-group-btn">
                        <button class="btn btn-secondary submit_btn" type="button">Subscribe</button>
                    </span>
                </div>
            </div>
        </footer>
    </div>
    <?php 
    if(isset($_POST["btn"])){
        $Name = $_POST["myname"];
        $email = $_POST["myemail"];
        $subject = $_POST["subject"];
        $textarea = $_POST["textarea"];
        $sql = "INSERT INTO `database01`(`name`, `email`, `subject`, `textarea`) VALUES ('$Name','$email','$subject','$textarea')";
        $connection = mysqli_query($conn,$sql);
        if($connection == true){
            echo "hello world";
        }else{
            echo "none";
        }
    }
    ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        integrity="sha512-onMTRKJBKz8M1TnqqDuGBlowlH0ohFzMXYRNebz+yOcc5TQr/zAKsthzhuv0hiyUKEiQEQXEynnXCvNTOk50dg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="src/jqurey.js"></script>
    <script src="src/script03.js"></script>
</body>
</html>