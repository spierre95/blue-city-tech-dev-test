<template>
  <div class="sidebar">
    <div class="side-bar-container">
      <ul>
        <li><i class="fa fa-file" aria-hidden="true"></i></li>
        <li><router-link class='nav-link' :to="{ name: 'Reports' }">Reports</router-link></li>
      </ul>
      <ul>
        <li>
          <i class="fa fa-bar-chart"></i>
        </li>
        <li><router-link class='nav-link' :to="{ name: 'Analytics' }">Analytics</router-link></li>
      </ul>
    </div>
    <div class="side-bar-container">
      <ul>
        <li><i class="fa fa-github" aria-hidden="true"></i></li>
        <li><a target="_blank" href="https://github.com/spierre95/blue-city-tech-dev-test">View Code</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSideBar",
};
</script>
<style lang="scss" scoped>
.sidebar {
  width: 66px;
  height: 100vh;
  background: #143157;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 1000;
}

.side-bar-container {
  border-collapse: collapse;
}
li {
  list-style-type: none;
  padding: 12px;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  position: relative;
}
ul:hover {
  background: #384968;
  border-color: blue;
}
.sidebar:hover {
  width: 225px;
}
.sidebar {
  transition: all 0.6s ease-in-out;
}
li:nth-child(2) {
  font-size: 26px;
  text-align: left;
  color: #5f9ea0;
  opacity: 0;
  margin-left: 5px;
  transition: all 0.4s ease;
  white-space: nowrap;
}

.sidebar:hover {
  li:nth-child(2) {
    opacity: 100;
  }
}

ul {
  display: flex;
  padding: 0;
  align-items: center;
}

.bottom {
  border: none;
  background: none;
  padding: 12px;
}
i {
  color: #5f9ea0;
  font-size: 26px;
}

.staff-count {
  position: absolute;
  right: -3px;
  top: 3px;
}

.nav-link {
  color: #5f9ea0;
  text-decoration: none;
}

</style>
