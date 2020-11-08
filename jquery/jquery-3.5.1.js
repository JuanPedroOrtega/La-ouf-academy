<!DOCTYPE html>
<html lang="fr">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>la ouf academy</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="jquery/jquery-3.5.1.min.js"></script>
    <link rel="stylesheet" href="bootstrap-4.5.3-dist/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="bootstrap-4.5.3-dist/js/bootstrap.min.js">
    <link rel="icon" href="images/favicon.ico"/>
 
</head>

<body>
  
    
  <!--Création du footer-->
  <footer>
      <!--Contenu du Footer-->
      <div id="footer" class="footer-white bg-white py-5 px-3">
        <div class="container">
          <div class="row">
            <!-- widget inscription à la newsletter-->
              <div class="widget col-md-4">
                <h3 class="h5 widget-title border-bottom border-smooth">Inscription à la Newsletter</h3>
                    <div class="thumbnail">
                        <form action="" method="post">
                            <div class="input-prepend"><span class="add-on"><i class="icon-envelope"></i></span>
                                <input type="text" id="" name="" placeholder="votre@email.com">
                            </div>
                            <br />
                            <input type="submit" value="Inscription" class="btn-dark"/>
                      </form>
                    </div>    
              </div>
            <!-- widget à propos de nous-->
            <div class="widget col-md-4">
              <h3 class="h5 widget-title border-bottom border-smooth">A propos de nous</h3>
              <div class="widget-content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eius cumque nesciunt deserunt dicta sint voluptates aspernatur illum quia possimus. Fugit modi explicabo saepe fuga laboriosam ipsam animi quas dolore!</p>
                <p class="footer-info"><a href="contact.html"></i>Contactez les Ouf</a></p>
              </div>
            </div>
          <!-- widget des liens vers les pages du site et les réseaux sociaux-->
            <div class="widget col-md-4">
              <h3 class="h5 widget-title border-bottom border-smooth">Liens sur le site</h3>
              <div class="widget-content">
                <!-- widget des liens vers les pages du site-->
                <ul class="list-unstyled before-arrow">
                  <li><a href="contact.html" title="renvoi vers la page des contacts">Contactez-nous</a></li>
                  <li><a href="#Financement" title="renvoi vers les renseignements sur le financement">Financement</a></li>
                  <li><a href="faq.html" title="renvoi vers la page de la foire aux questions">FAQ</a></li>
                  <li><a href="terms.html" title="renvoi vers les termes et conditions d'utilisation du site">Termes &amp; Conditions</a></li>
                </ul>
              <!-- Liens et icones réseaux sociaux-->
                <ul class="list-unstyled row col-md-4 padding-3px" >  
                  <li><a  href="https://twitter.com/?lang=fr" target="_blank"><img src="images/twitterIcon.png" title="la ouf accademy sur Twitter" height="20" width="20"></a></li>
                  <li><a  href="https://www.facebook.com/" target="_blank"><img src="images/facebookIcon.png" title="la ouf accademy sur Facebook" height="20" width="20"></a></li>
                  <li><a  href="https://slack.com/intl/fr-fr" target="_blank"><img src="images/slackIcon.png" title="la ouf accademy sur Facebook" height="20" width="20"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!--footer bootstrap-->
      <div class="bg-dark footer-dark py-1 border-top border-smooth">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md text-center">
              <p class="d-block mb-3 mt-3 text-white">Fabriqué et conçu avec <i class="fa fa-heart text-danger"></i> <a href="https://getbootstrap.com/" target="_blank">Bootstrap 4</a></p>
            </div>
          </div>
        </div>
      </div>  
      
      <!--copyright -->
      <div class="container">
        <div class="row">  
          <!-- Copyright -->
          <div class="col-12 col-md text-center">
            <div class="footer-copyright py-3">© 2020 Copyright:<a href="index.html"> LA Ouf Accademy</a>
            </div>
          </div>
        </div>
      </div>
  </footer>
</body>
</html>