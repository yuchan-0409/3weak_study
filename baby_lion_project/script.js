document.addEventListener("DOMContentLoaded", () => {
  const members = [
    {
      name: "김아기사자",
      part: "Frontend",
      skills: ["HTML", "CSS"],
      shortIntro: "구조와 스타일을 기반으로 프론트엔드 개발자입니다.",
      bio: "HTML/CSS로 화면의 뼈대와 스타일을 만들고, JavaScript로 동적인 화면을 구현하는 과정에 관심이 있습니다.",
      email: "lion1@example.com",
      phone: "010-1111-1111",
      website: "https://example.com/lion1",
      message: "변화가 보이는 코드를 만들고 싶습니다.",
      image: "https://picsum.photos/id/1015/640/480"
    },
    {
      name: "박아기사자",
      part: "Backend",
      skills: ["Java", "Spring"],
      shortIntro: "안정적인 서버 구조와 데이터 흐름을 고민합니다.",
      bio: "API 설계, 데이터베이스, 서버 로직처럼 보이지 않는 곳에서 서비스를 단단하게 만드는 일에 관심이 있습니다.",
      email: "lion2@example.com",
      phone: "010-2222-2222",
      website: "https://example.com/lion2",
      message: "느리더라도 정확하게 성장하겠습니다.",
      image: "https://picsum.photos/id/180/640/480"
    },
    {
      name: "이아기사자",
      part: "Design",
      skills: ["Figma", "UI"],
      shortIntro: "사용자 경험과 디자인 시스템을 고민합니다.",
      bio: "사용자가 편하게 이해하고 사용할 수 있는 인터페이스를 설계하는 데 관심이 있습니다.",
      email: "lion3@example.com",
      phone: "010-3333-3333",
      website: "https://example.com/lion3",
      message: "보기 좋은 화면보다 쓰기 좋은 화면을 만들겠습니다.",
      image: "https://picsum.photos/id/15/640/480"
    },
    {
      name: "최아기사자",
      part: "Frontend",
      skills: ["React", "JavaScript"],
      shortIntro: "컴포넌트와 상태 관리에 관심이 많습니다.",
      bio: "재사용 가능한 컴포넌트를 만들고, 상태 변화에 따라 UI가 자연스럽게 반응하는 구조를 배우고 있습니다.",
      email: "lion4@example.com",
      phone: "010-4444-4444",
      website: "https://example.com/lion4",
      message: "작은 컴포넌트부터 탄탄하게 만들겠습니다.",
      image: "https://picsum.photos/id/1080/640/480"
    },
    {
      name: "정아기사자",
      part: "Backend",
      skills: ["Node.js", "Express"],
      shortIntro: "API와 서버 구조를 실습하고 있습니다.",
      bio: "클라이언트 요청을 처리하고 필요한 데이터를 응답하는 서버 흐름을 직접 구현하는 데 흥미가 있습니다.",
      email: "lion5@example.com",
      phone: "010-5555-5555",
      website: "https://example.com/lion5",
      message: "요청과 응답의 흐름을 끝까지 이해하겠습니다.",
      image: "https://picsum.photos/id/1035/640/480"
    },
    {
      name: "윤아기사자",
      part: "Design",
      skills: ["Design Tokens", "UX"],
      shortIntro: "일관된 UI 규칙과 경험을 설계합니다.",
      bio: "색상, 간격, 폰트처럼 반복되는 디자인 요소를 체계화해 더 일관된 화면을 만드는 데 관심이 있습니다.",
      email: "lion6@example.com",
      phone: "010-6666-6666",
      website: "https://example.com/lion6",
      message: "디자인도 시스템처럼 관리하겠습니다.",
      image: "https://picsum.photos/id/1073/640/480"
    },
    {
      name: "강아기사자",
      part: "Frontend",
      skills: ["HTML", "CSS", "JavaScript"],
      shortIntro: "DOM 조작으로 화면을 바꾸는 중입니다.",
      bio: "입력한 데이터가 화면의 카드와 상세 목록에 즉시 반영되는 흐름을 이해하고 있습니다.",
      email: "lion7@example.com",
      phone: "010-7777-7777",
      website: "https://example.com/lion7",
      message: "데이터가 바뀌면 화면도 바뀐다!",
      image: "https://picsum.photos/id/1025/640/480"
    },
    {
      name: "한아기사자",
      part: "Backend",
      skills: ["Database", "SQL"],
      shortIntro: "데이터 저장과 조회 구조를 연습합니다.",
      bio: "서비스에서 필요한 데이터를 어떻게 저장하고 효율적으로 조회할지 고민하는 백엔드 학습자입니다.",
      email: "lion8@example.com",
      phone: "010-8888-8888",
      website: "https://example.com/lion8",
      message: "데이터 구조를 정확히 설계하겠습니다.",
      image: "https://picsum.photos/id/1043/640/480"
    },
    {
      name: "서아기사자",
      part: "Design",
      skills: ["Prototype", "User Flow"],
      shortIntro: "사용자 흐름을 시각화하는 중입니다.",
      bio: "사용자가 어떤 순서로 화면을 보고 행동하는지 정리하며 더 쉬운 사용 경험을 설계하고 있습니다.",
      email: "lion9@example.com",
      phone: "010-9999-9999",
      website: "https://example.com/lion9",
      message: "흐름이 자연스러운 서비스를 만들겠습니다.",
      image: "https://picsum.photos/id/1067/640/480"
    }
  ];

  const formPanel = document.querySelector("#formPanel");
  const toggleFormBtn = document.querySelector("#toggleFormBtn");
  const deleteLastBtn = document.querySelector("#deleteLastBtn");
  const cancelBtn = document.querySelector("#cancelBtn");
  const lionForm = document.querySelector("#lionForm");
  const cardGrid = document.querySelector("#cardGrid");
  const detailList = document.querySelector("#detailList");
  const memberCount = document.querySelector("#memberCount");

  const partImageMap = {
    Frontend: "https://picsum.photos/id/1050/640/480",
    Backend: "https://picsum.photos/id/0/640/480",
    Design: "https://picsum.photos/id/1060/640/480"
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeWebsite(url) {
    const trimmed = url.trim();
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
  }

  function validateForm() {
    const requiredFields = Array.from(lionForm.querySelectorAll("input, select, textarea"));

    for (const field of requiredFields) {
      field.setCustomValidity("");

      if (!field.value.trim()) {
        field.setCustomValidity("이 항목을 작성해주세요.");
        field.reportValidity();
        field.focus();
        return false;
      }
    }

    const emailField = document.querySelector("#email");
    if (!emailField.value.includes("@")) {
      emailField.setCustomValidity("이메일 주소에 '@'를 포함해 주세요.");
      emailField.reportValidity();
      emailField.focus();
      return false;
    }

    const websiteField = document.querySelector("#website");
    const normalized = normalizeWebsite(websiteField.value);
    try {
      const parsedUrl = new URL(normalized);
      if (!parsedUrl.hostname.includes(".")) {
        throw new Error("Invalid URL");
      }
      websiteField.value = normalized;
    } catch (error) {
      websiteField.setCustomValidity("URL을 입력하세요.");
      websiteField.reportValidity();
      websiteField.focus();
      return false;
    }

    return true;
  }

  function renderSummaryCards() {
    if (members.length === 0) {
      cardGrid.innerHTML = '<p class="empty-state">등록된 아기 사자가 없습니다.</p>';
      return;
    }

    cardGrid.innerHTML = members.map((member) => {
      const skills = member.skills.join(" / ");
      return `
        <article class="summary-card">
          <div class="image-wrap">
            <img src="${escapeHtml(member.image)}" alt="${escapeHtml(member.name)} 프로필 이미지" loading="lazy" />
            <span class="badge">${escapeHtml(skills)}</span>
          </div>
          <div class="card-body">
            <h2>${escapeHtml(member.name)}</h2>
            <p class="part">${escapeHtml(member.part)}</p>
            <p class="short-intro">${escapeHtml(member.shortIntro)}</p>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderDetailCards() {
    detailList.innerHTML = members.map((member) => {
      const skills = member.skills.map(skill => `<li>${escapeHtml(skill)}</li>`).join("");
      return `
        <article class="detail-card">
          <h3>${escapeHtml(member.name)}</h3>
          <p class="detail-part">${escapeHtml(member.part)}</p>
          <dl>
            <dt>동아리명</dt>
            <dd>멋쟁이사자처럼</dd>
            <dt>자기소개</dt>
            <dd>${escapeHtml(member.bio)}</dd>
            <dt>관심 기술</dt>
            <dd><ul>${skills}</ul></dd>
            <dt>연락처</dt>
            <dd>
              Email: <a href="mailto:${escapeHtml(member.email)}">${escapeHtml(member.email)}</a><br />
              Phone: <a href="tel:${escapeHtml(member.phone)}">${escapeHtml(member.phone)}</a><br />
              Website: <a href="${escapeHtml(member.website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(member.website)}</a>
            </dd>
            <dt>한 마디</dt>
            <dd>${escapeHtml(member.message)}</dd>
          </dl>
        </article>
      `;
    }).join("");
  }

  function updateCount() {
    memberCount.textContent = members.length;
  }

  function render() {
    updateCount();
    renderSummaryCards();
    renderDetailCards();
  }

  function openForm() {
    formPanel.classList.remove("hidden");
    toggleFormBtn.textContent = "폼 닫기";
    document.querySelector("#name").focus();
  }

  function closeForm() {
    formPanel.classList.add("hidden");
    toggleFormBtn.textContent = "아기 사자 추가";
    lionForm.reset();
    Array.from(lionForm.elements).forEach((field) => field.setCustomValidity?.(""));
  }

  toggleFormBtn.addEventListener("click", () => {
    if (formPanel.classList.contains("hidden")) {
      openForm();
    } else {
      closeForm();
    }
  });

  cancelBtn.addEventListener("click", closeForm);

  deleteLastBtn.addEventListener("click", () => {
    if (members.length === 0) {
      alert("삭제할 아기 사자가 없습니다.");
      return;
    }

    members.pop();
    render();
  });

  lionForm.addEventListener("input", (event) => {
    if (event.target.matches("input, select, textarea")) {
      event.target.setCustomValidity("");
    }
  });

  lionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData(lionForm);
    const part = formData.get("part").trim();
    const skills = formData.get("skills")
      .split(",")
      .map(skill => skill.trim())
      .filter(Boolean);

    members.push({
      name: formData.get("name").trim(),
      part,
      skills,
      shortIntro: formData.get("shortIntro").trim(),
      bio: formData.get("bio").trim(),
      email: formData.get("email").trim(),
      phone: formData.get("phone").trim(),
      website: normalizeWebsite(formData.get("website")),
      message: formData.get("message").trim(),
      image: partImageMap[part] || "https://picsum.photos/id/1024/640/480"
    });

    render();
    closeForm();
  });

  render();
});
