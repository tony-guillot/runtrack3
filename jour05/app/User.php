
<?php 

require_once 'Db.php';
class User {


        private $nom; 
        private $prenom; 
        private $password;
        private $email;
    
         public function  __construct($nom, $prenom,$password, $email)
        {
            
            $this->db = new Db();

            $this->nom = $nom;
            $this->prenom = $prenom;
            $this->password = $password;
            $this->email = $email;
            
        }

        public function Signup(){

            $req = $this->db->prepare('SELECT *  FROM utlitsateurs');
            
            $req->execute();

            $result = $req->fetch();

            return $result;

        }



}