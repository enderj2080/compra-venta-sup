<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Logo</b-navbar-brand>
  
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Inicio</b-nav-item>
            <b-nav-item href="#">Acerca</b-nav-item>
            <b-nav-item href="#">Productos</b-nav-item>
            <b-nav-item href="#">API</b-nav-item>
            <b-nav-item href="#">Soporte</b-nav-item>
            <b-nav-item href="#">Contacto</b-nav-item>
          </b-navbar-nav>
  
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
            </b-nav-form>
  
            <b-nav-item-dropdown text="Idioma" right>
              <b-dropdown-item href="#">Español</b-dropdown-item>
              <b-dropdown-item href="#">Inglés</b-dropdown-item>
              <b-dropdown-item href="#">Francés</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </template>
  