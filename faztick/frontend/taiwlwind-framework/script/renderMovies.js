var container = document.getElementById('movieList')

const movieData = [
  {
    title: 'Black Widow',
    genres: ['Action', 'Adventure'],
    date: 'March 2024',
    isRecommended: false,
    poster_url: '/public/images/black-widow.png',
  },
  {
    title: 'The Witches',
    genres: ['Action', 'Adventure'],
    date: 'March 2024',
    isRecommended: true,

    poster_url: '/public/images/withces.png',
  },
  {
    title: 'Tenet',
    genres: ['Action', 'Adventure'],
    date: 'March 2024',
    isRecommended: false,

    poster_url: '/public/images/tenet.png',
  },
  {
    title: 'Spiderman',
    genres: ['Action', 'Adventure'],
    date: 'March 2024',
    isRecommended: true,
    poster_url: '/public/images/poster-spider.png',
  },
]

function renderRecommendation(isRecommended) {
  return isRecommended
    ? `
    <div class="absolute w-[135px] h-9 bg-no-repeat bg-cover px-[17px]  -left-2 top-3.5"
      style="background-image: url(/public/images/recommend.png)">
      <span class="text-white text-sm">
        Recommended </span>
    </div>
  `
    : ''
}

function renderMovieList(data) {
  var html = ``
  for (let i = 0; i <= 3; i++) {
    data.forEach((data) => {
      html += `<div class="w-fit m-auto rounded-[5px]">
              <div
                class="relative sm:w-full max-h-[405px] max-w-[264px] sm:h-fit bg-cover bg-no-repeat bg-center h-[369px] w-60"
                style="background-image: url(${data.poster_url})">
                ${renderRecommendation(data.isRecommended)}
                <div
                  class="h-[405px] w-[264px] transition-[background-color] duration-[0.25s] ease-linear inline-flex items-center justify-center rounded-[5px] hover:bg-[rgba(0,0,0,0.5)] image">
                  <div
                    class="opacity-0 transition-transform duration-[0.24s] ease-[ease-in] delay-[0] flex flex-col gap-3 scale-0 poster">
                    <a
                      class="no-underline text-sm px-[69px] py-3 rounded-[7px] first:border text-white border-solid border-white"
                      href="/pages/details.html"
                      >Details</a
                    >
                    <a
                      class="no-underline text-sm px-[69px] py-3 rounded-[7px] first:border bg-primary text-white"
                      href="/pages/payment.html"

                      >Buy Ticket</a
                    >
                  </div>
                </div>
              </div>

              <div class="px-0 py-[19px]">
                <h3
                  class="text-2xl font-bold leading-[34px] text-textTitle mb-[7px]">
                  ${data.title}
                </h3>
                <div class="inline-flex gap-[7px]">
                  <p
                    class="ext-center bg-[#a0a3bd1a] text-[#a0a3bd] text-base px-[18px] py-[5px] rounded-[30px]">
                    ${data.genres[0]}
                  </p>
                </div>
                <div class="inline-flex gap-[7px]">
                  <p
                    class="ext-center bg-[#a0a3bd1a] text-[#a0a3bd] text-base px-[18px] py-[5px] rounded-[30px]">
                    ${data.genres[1]}
                  </p>
                </div>
              </div>
            </div>`
    })
  }

  container.innerHTML = html
}
renderMovieList(movieData)
