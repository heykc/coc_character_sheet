<script lang="ts">
  import { page } from '$app/stores';

  const pages = {
    '/characteristics': 'Characteristics',
    '/skills': 'Skills',
    '/combat-spells': 'Combat & Spells',
    '/inventory': 'Inventory',
    '/bio': 'Bio',
  };

  $: pageId = $page.route.id;
</script>

<div id="app">
<header>
  <h1><span>The</span>Investigator</h1>
  <nav>
    {#each Object.entries(pages) as [key, value]}
      <div><a class:active={pageId === key} href={key}>{value}</a></div>
    {/each}
  </nav>
</header>

<main>
  <slot />
</main>
</div>

<style>
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    width: 90%;
    color: var(--color-text);
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 3rem;
    translate: -20px;
    margin-bottom: .5rem;

    & > span {
      font-size: 1.5rem;
      vertical-align: top;
      line-height: 2rem;
    }

    &:after {
      content: 'Character Sheet';
      display: block;
      font-size: 1rem;
      line-height: 1rem;
      text-transform: capitalize;
      right: 0;
      text-align: right;
    }
  }

  nav {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 20px;
    padding: 1rem;
    border-top: 3px solid var(--color-text);
    border-bottom: 3px solid var(--color-text);

    &::before, &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      left: 0;
      background-color: var(--color-text);
    }
    
    &::before {
      top: -8px;
    }

    &::after {
      bottom: 4px;
    }
  }

  div { 
    text-align: center;
  }

  a {
    display: block;
    position: relative;
    font-weight: 700;

    &.active:hover {
      text-decoration: none;
      mouse-events: none;
      cursor: default;
    }

    &.active::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      scale: 1.2 .9;
      translate: -2% -2%;
      rotate: -3deg;
      border: 1px solid var(--color-alert);
      border-radius: 100% 80% 100% 80%;
      border-width: 2px 1px 2px 1px;
    }
  }

  main {
    width: 90%;
    text-align: left;
  }
</style>