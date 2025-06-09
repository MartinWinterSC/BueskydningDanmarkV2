<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref({
  title: '',
  image: '',
  imageAlt: '',
  contentHtml: '',
});

const isLiked = ref(false);
const isBookmarked = ref(false);

const comments = ref([
  {
    id: 1,
    username: "Mads",
    timestamp: "6 måneder",
    avatar: "",
    text: "Velkommen til sporten - fedt at høre om din motivation! Et par hurtige tips: Du kan prøve vejrtrækningsøvelser, det hjælper både med ro og koncentration. Sørg for at få trænet med stabilitet af at styrke alle små muskler i fitness, især mavemuskler! Og rytmisk, så man meget bruger som til at hvile og træk stille. Mvh Brian"
  },
  {
    id: 2,
    username: "Marianne",
    timestamp: "6 måneder",
    avatar: "",
    text: "Fedt at høre om din træning! Jeg har haft god gavn af at styrketræning og balanceøvelser - især core og ben. Træntræning med fokus på åftræk og sige hjælper også med at holde teknikken skarp. For koncentration bruger jeg faste rutiner og små mentale pauser mellem serier. Hilsen Marianne"
  }
]);

const sidebarItems = ref([
  {
    id: 1,
    title: "Emme: Lær det rette mindset til bueskydning",
    image: ""
  },
  {
    id: 2,
    title: "Emme: Bueskydning i naturen",
    image: ""
  },
  {
    id: 3,
    title: "Emme: Salg af brugt udstyr den 2016",
    image: ""
  },
  {
    id: 4,
    title: "Emme: Recurvebue sælges",
    image: ""
  }
]);

const toggleLike = () => {
  isLiked.value = !isLiked.value;
};

const toggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value;
};

onMounted(async () => {
  const id = route.query.id;
  if (!id) return;

  try {
    const res = await fetch(`https://www.mmd-s23-afsluttende-wp.dk/wp-json/wp/v2/news/${id}?_embed`);
    const data = await res.json();

    post.value.title = data.title.rendered;
    post.value.image = data._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
    post.value.imageAlt = data._embedded?.['wp:featuredmedia']?.[0]?.alt_text || data.title.rendered;
    post.value.contentHtml = data.content?.rendered || '';
  } catch (err) {
    console.error('Failed to fetch post:', err);
  }
});
</script>

<template>
<main>
  <div class="PostContainer">
    <div class="headerSection">
      <div class="titleWithLine">
        {{ post.title }}
        <div class="line"></div>
      </div>
    </div>
    <nav class="navigation">
      <a href="#" class="backLink">
        <span class="backArrow">‹</span> Tilbage
      </a>
    </nav>
    <div class="postLayout">
      <section class="mainContent">
        <div class="postImageContainer">
          <img 
            :src="post.image" 
            :alt="post.imageAlt"
            class="postImage"
          />
        </div>
        <div class="postActions">
          <button 
            class="actionBtn"
            :class="{ active: isLiked }"
            @click="toggleLike"
          >
            <span class="heartIcon"></span>
          </button>
          <button 
            class="actionBtn"
            :class="{ active: isBookmarked }"
            @click="toggleBookmark"
          >
            <span class="bookmarkIcon">🏷</span>
          </button>
        </div>
        <article class="postContent">
          <h2 class="postTitle">{{ post.title }}</h2>
          <div class="postBody" v-html="post.contentHtml"></div>
        </article>

        <section class="commentsSection">
          <button class="commentBtn">Skriv en kommentar</button>
          <div class="commentsList">
            <div 
              v-for="comment in comments" 
              :key="comment.id"
              class="comment"
            >
              <div class="commentAvatar">
                <img :src="comment.avatar" :alt="comment.username" />
              </div>
              <div class="commentContent">
                <div class="commentHeader">
                  <span class="commentUsername">{{ comment.username }}</span>
                  <span class="commentTime">{{ comment.timestamp }}</span>
                </div>
                <p class="commentText">{{ comment.text }}</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <aside class="sidebar">
        <div 
          v-for="item in sidebarItems" 
          :key="item.id"
          class="sidebarCard"
        >
          <img :src="item.image" :alt="item.title" class="sidebarImage" />
          <div class="sidebarContent">
            <h3 class="sidebarTitle">{{ item.title }}</h3>
          </div>
        </div>
      </aside>
    </div>
  </div>
</main>
</template>

<style scoped>
.PostContainer {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-lg);
  font-family: var(--font-family);
  background-color: var(--color-background);
}
.postHeader {
  margin-bottom: var(--space-md);
}
.postTitle {
  font-size: 24px;
  font-weight: bold;
  color: var(--headerFont);
  margin-bottom: var(--space-xs);
}
.navigation {
  margin-bottom: var(--space-md);
}
.backLink {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}
.backLink:hover {
  color: var(--font-color);
}
.backArrow {
  font-size: 18px;
}
.postLayout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--space-lg);
}
.mainContent {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.postImageContainer {
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}
.postImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #e9ecef;
}
.postActions {
  padding: var(--space-md);
  display: flex;
  gap: var(--space-sm);
  border-bottom: 1px solid #eee;
}
.actionBtn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: var(--space-xs);
  border-radius: 4px;
  transition: background-color 0.2s;
}
.actionBtn:hover {
  background-color: #f0f0f0;
}
.actionBtn.active .heartIcon {
  color: #dc3545;
}
.actionBtn.active .bookmarkIcon {
  color: var(--BtnColor);
}
.postContent {
  padding: var(--space-md);
}
.postBody p {
  margin-bottom: var(--space-sm);
  line-height: var(--text-line-Height);
  color: var(--textFont);
}
.bullet-points {
  margin: var(--space-md) 0;
  padding-left: var(--space-md);
}
.bullet-points li {
  margin-bottom: var(--space-xs);
  line-height: var(--text-line-Height);
  color: var(--textFont);
}
/* Kommentare Section */
.commentsSection {
  border-top: 1px solid #eee;
  padding: var(--space-md);
}
.commentBtn {
  background-color: #e9ecef;
  border: none;
  padding: var(--space-sm) var(--space-md);
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  margin-bottom: var(--space-md);
  transition: background-color 0.2s;
  width: 100%;
  text-align: left;
}
.commentBtn:hover {
  background-color: #dee2e6;
}
.commentsList {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
.comment {
  display: flex;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background-color: #f8f9fa;
  border-radius: 8px;
}
.commentAvatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #dee2e6;
}
.commentContent {
  flex: 1;
}
.commentHeader {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-xs);
}
.commentUsername {
  font-weight: 600;
  color: var(--font-color);
  font-size: 14px;
}
.commentTime {
  color: #666;
  font-size: 12px;
}
.commentText {
  margin: 0;
  line-height: 1.5;
  color: var(--textFont);
  font-size: 14px;
}
.sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
.sidebarCard {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.2s;
}
.sidebarCard:hover {
  transform: translateY(-2px);
}
.sidebarImage {
  width: 100%;
  height: 120px;
  object-fit: cover;
  background-color: #e9ecef;
}
.sidebarContent {
  padding: var(--space-sm);
  background-color: var(--BtnColor);
  color: var(--BtnTextColor);
}
.sidebarTitle {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}
@media (max-width: 768px) {
  .postLayout {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
  .sidebar {
    order: -1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-sm);
  }
  .comment {
    flex-direction: column;
  }
  .commentHeader {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>