<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Navbar</router-link>
      <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/products" class="nav-link">所有商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">後台登入</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products/carts" class="nav-link">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" class="cartIcon"/>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container pt-5">
    <router-view></router-view>
  </div>
</template>
