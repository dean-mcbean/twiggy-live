<html>
    <head>
        <title>Twiggy.live</title>
        <link rel="stylesheet" href="styles.css">

        <!-- JQUERY -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

        <!-- FIREBASE & FIRESTORE -->
        <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>

        <!-- AUTH UI -->
        <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
        <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />

    </head>
    <body>
        <table id="page-table">
            <tr>
                <td id="page-header-td">
                    Twiggy.live
                </td>
            </tr>
            <tr>
                <td id="page-contents-td">
                    <div id="firebase-ui-div"></div>
                </td>
            </tr>
            <tr>
                <td id="page-footer-td">
                    Made with love by Nick Twiggy
                </td>
            </tr>
        </table>
    </body>
</html>
<script type="module" src="js/firebase/firebase_init_m.js"></script>
<script type="module" src="js/firebase/firebase_ui_auth_m.js"></script>
<script type="module" src="js/main/app_init_m.js"></script>
