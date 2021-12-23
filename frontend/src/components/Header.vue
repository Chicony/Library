<template>
  <header class="container header">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="navbar-item">
          <img class="logo" src="../assets/logo.png" alt="Logo">
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="headerNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="headerNavbar" class="navbar-menu">
        <div class="navbar-start">
          <router-link :to="{ name: 'home' }" class="navbar-item">Главная</router-link>
          <router-link :to="{ name: 'list' }" class="navbar-item">Список книг</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header
{
  padding-top: 30px;
}

.navbar
{
  background-color: transparent;
}

.logo
{
  max-height: none;
}

.navbar-menu
{
  padding: 0 40px;
}

.navbar-menu .navbar-item
{
  color: #fff;
}

.navbar-start
{
  align-items: center;
}

.navbar-start .navbar-item:hover,
.navbar-start .navbar-item:focus
{
  background-color: rgba(255, 255, 255, .4);
  border-radius: 10px 0;
}
</style>