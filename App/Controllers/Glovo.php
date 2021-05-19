<?php

namespace App\Controllers;

use \Core\View;
use \App\Models\Pizza;

/**
 * Home controller
 *
 * PHP version 7.0
 */
class Glovo extends \Core\Controller
{

    /**
     * Before filter. Return false to stop the action from executing.
     *
     * @return void
     */
    protected function before()
    {
        // ...
    }

    protected function after()
    {
        // ...
    }

    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction()
    {
        View::renderTemplate('Glovo/index.html');
    }

    public function dataAction()
    {
      echo Pizza::getAll();
    }
}
