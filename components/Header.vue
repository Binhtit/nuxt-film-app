<template>
  <div class="header__navbar mb-2">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <nuxt-link class="navbar-brand" to="/"
        >Navbar<span class="sr-only">(current)</span></nuxt-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active ml-3">
            <nuxt-link to="/2d-movies"
              >HOẠT HÌNH 2D<span class="sr-only">(current)</span></nuxt-link
            >
          </li>
          <li class="nav-item ml-3">
            <nuxt-link to="/3d-movies"
              >HOẠT HÌNH 2D<span class="sr-only">(current)</span></nuxt-link
            >
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <div>
          <div class="nav-item dropdown">
            <a class="nav-lang dropdown-toggle" href="#" role="button">
              Lang
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  &__navbar {
    .navbar {
      background: var(--componentbackground);
      width: 100%;
      a {
        color: var(--white);
      }
      .navbar-nav {
        font-weight: bold;
      }
      .nav-lang {
        margin-left: 16px;
      }
    }
  }
}
</style>
