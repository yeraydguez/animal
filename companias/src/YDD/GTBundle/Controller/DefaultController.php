<?php

namespace YDD\GTBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('YDDGTBundle:Default:index.html.twig', array('name' => $name));
    }
}
