<script>
  import * as Down from "../assets/down.svg";
  import * as Down_fill from "../assets/down_fill.svg";
  import * as Up from "../assets/up.svg";
  import * as Up_fill from "../assets/up_fill.svg";

  let posts = [
    {
      title: "Post 1",
      description: "post description",
      comments: 5,
      thumb_fills: {
        down: false,
        up: false,
      },
    },
    {
      title: "Post 2",
      description: "post description",
      comments: 5,
      thumb_fills: {
        down: false,
        up: false,
      },
    },
    {
      title: "Post 3",
      description: "post description",
      comments: 5,
      thumb_fills: {
        down: false,
        up: false,
      },
    },
    {
      title: "Post 4",
      description: "post description",
      comments: 5,
      thumb_fills: {
        down: false,
        up: false,
      },
    },
    {
      title: "Post 5",
      description: "post description",
      comments: 5,
      thumb_fills: {
        down: false,
        up: false,
      },
    },
  ];
</script>

<div id="forum-listing-container">
  {#each posts as post, n}
    <div class="forum-post">
      <div style="width: 70px;">
        <img
          src={post.thumb_fills.down ? Down_fill.default : Down.default}
          alt="downvote"
          on:mouseenter={() => {
            post.thumb_fills.down = true;
          }}
          on:mouseleave={() => {
            post.thumb_fills.down = false;
          }}
        />
        <img
          src={post.thumb_fills.up ? Up_fill.default : Up.default}
          alt="upvote"
          on:mouseenter={() => {
            post.thumb_fills.up = true;
          }}
          on:mouseleave={() => {
            post.thumb_fills.up = false;
          }}
        />
      </div>
      <span style="font-size:x-large; grid-column-start: 2;">{post.title}</span>
      <span style="grid-column-start: 3;">{post.description}</span>
      <div
        style="grid-column-start: 4; display: grid; align-items: center; font-size: larger;"
      >
        <span class="material-symbols-outlined" style="justify-self: right;">
          forum
        </span>
        <span style="grid-column-start: 2; margin-left: 10px;"
          >{post.comments}</span
        >
      </div>
    </div>
  {/each}
</div>

<style>
  #forum-listing-container {
    width: 90%;
    display: grid;
    gap: 10px;
  }

  .forum-post {
    display: grid;
    background: rgb(27, 27, 27);
    padding: 10px;
    border-radius: 10px;
    font-size: large;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }

  .forum-post > span {
    width: 100%;
    text-align: center;
  }

  .forum-post > div > img {
    filter: invert();
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
</style>
