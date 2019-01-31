<template>
  <div class="mx-auto" style="width: 500px;">
    <ul class="nav nav-pills">
      <router-link class="nav-link" to="/" tag="li" active-class="active" exact
        ><a>home</a></router-link
      >

      <router-link class="nav-link" to="/patient" tag="li" active-class="active"
        ><a>patient</a></router-link
      >

      <router-link
        class="nav-link"
        to="/patientdetail"
        tag="li"
        active-class="active"
        ><a>patientdetail</a></router-link
      >
    </ul>
    <!--
      <b-nav pills>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    -->
  </div>
</template>
