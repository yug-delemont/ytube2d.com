/*var wid = $(window).width(),
hei = $(window).height();
alert("width:" + wid +"px and height: " + hei + "px.")
*/

// $(document).ready(function () {
//   $(".navbar-toggler").click(function () {
//     $("html").toggleClass("show-menu");
//   });

//   function scrolling() {
//     var sticky = $("header"),
//       scroll = $(window).scrollTop();

//     if (scroll >= 15) sticky.addClass("fixed");
//     else sticky.removeClass("fixed");
//   }
//   scrolling();
//   $(window).scroll(scrolling);

//   // hide #back-top first
//   $("#myBtn").hide();

//   // fade in #back-top
//   $(function () {
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 100) {
//         $("#myBtn").fadeIn();
//       } else {
//         $("#myBtn").fadeOut();
//       }
//     });

//     // scroll body to 0px on click
//     $("#myBtn").click(function () {
//       $("body,html").animate(
//         {
//           scrollTop: 0,
//         },
//         1000
//       );
//       return false;
//     });
//   });
// });

// //cursor

// $(".menu").click(function () {
//   $(this).toggleClass("open");
// });

//navbar
document.querySelector("#nav-btn").addEventListener("click", function () {
  // document.querySelector("html").classList.toggle("show-menu");
  document.querySelector("html").classList.toggle("show-menu");
});

const input = document.querySelector("input");
const downloadBtn = document.querySelector(".download-btn");
const errorMsg = document.querySelector("#error-msg");

const loader = document.querySelector("#loading");

const videoFile = document.querySelector("#video-file");

// var iframe = document.createElement("iframe");
// iframe.style.width = "464px";
// iframe.style.height = "259.595px";
// videoFile.appendChild(iframe);

let div1 = document.createElement("div");
let div2 = document.createElement("div");
videoFile.appendChild(div1);
videoFile.appendChild(div2);
let fetchData = [];
input.addEventListener("input", updateValue);

async function updateValue(e) {
  loader.classList.remove("hidden");
  // loader.classList.add("block");
  let url = e.target.value;
  let dataInfo = {
    url: url,
  };

  let regex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (regex.test(url)) {
    try {
      // displayLoading();
      const response = await fetch("http://localhost:3000/api/data-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataInfo),
      });
      // loader ? displayLoading() : dataInfo ? showData() : hideLoading();
      const result = await response.json();
      console.log("Success:", result);
      if (result.success === true) {
        loader.classList.add("hidden");

        div1.innerHTML = `
        <iframe src=${result.info.videoDetails.embed.iframeUrl} width="464px"  height="259.595px">
        </iframe>
        <p class="title">${result.info.videoDetails.title}</p>`;

        div2.innerHTML = `
        <div class="qualities">
          <div class="grid grid-cols-2">
            <h1 class="video-title">Video (Mp4)</h1>
            <h1 class="video-title">Download</h1>
          </div>
          <div class="video-horizontal-line"></div>
          <div class="video-quality  flex flex-col ">     
          </div>
          <div class="audioFile grid grid-cols-2">
            <h1 class="video-title">Audio (Mp3)</h1>
            <h1 class="video-title">Download</h1>
          </div>
          <div class="video-horizontal-line"></div>
          <div class="Audio-quality">
           

          </div>
        </div>
        `;
        let videoTitle = result.info.videoDetails.title;
        let videoQuality = document.querySelector(".video-quality");

        let AudioQuality = document.querySelector(".Audio-quality");

        fetchData.push(result.info.formats);
        let uniqueQualities = [
          ...new Set(
            fetchData[0]
              .filter((format) => format.audioBitrate != null)
              .map((result) => result.qualityLabel)
              .filter((qualityLabel) => qualityLabel != null)
          ),
        ].sort((a, b) => {
          let numA = parseInt(a);
          let numB = parseInt(b);
          return numA - numB;
        });
        let uniqueAudioFormats = fetchData[0].filter(
          (format) =>
            format.audioCodec != "opus" &&
            format.qualityLabel == null &&
            format.codecs != "avc1.64001F, mp4a.40.2"
        );

        let title = videoTitle;
        console.log(title);
        let quality_Label = uniqueQualities
          .map((qualityLabel) => {
            let format = fetchData[0].find(
              (f) => f.qualityLabel === qualityLabel && f.audioBitrate != null
            );

            if (!format) return "";
            let videoUrl = format.url;

            let videoContainer = format.container;
            console.log(videoContainer);

            console.log(qualityLabel);
            console.log(videoUrl);
            let str = `
         
          <div class=" grid grid-cols-2">
            <div class="flex gap-[16px] items-center justify-center p-[16px]">
            <p class="video-mp">${qualityLabel}(${videoContainer})</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 9.99997V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.40997C15 4.42997 12.93 3.28997 10.41 4.86997L7.49 6.69997C7.17 6.88997 6.8 6.99997 6.43 6.99997H5C3 6.99997 2 7.99997 2 9.99997Z"
                  stroke="#292D32" stroke-width="1.5" />
                <path d="M18 8C19.78 10.37 19.78 13.63 18 16" stroke="#292D32" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.8301 5.5C22.7201 9.35 22.7201 14.65 19.8301 18.5" stroke="#292D32"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            
            <button class="video-btn flex gap-[8px] justify-center items-center p-[16px]" onClick="videoDownload(this,'${videoUrl}', '${qualityLabel}', '${videoContainer}' , '${title}') "  id="down-btn2">
              <p class="video-download">Download</p>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9626 8.6678L16.9674 8.66821C18.877 8.83134 20.1692 9.41959 20.9973 10.4201C21.8342 11.4312 22.27 12.9501 22.27 15.13V15.26C22.27 17.647 21.7556 19.2345 20.7531 20.2348C19.7503 21.2354 18.1574 21.75 15.76 21.75H9.23998C6.8425 21.75 5.24996 21.2354 4.24728 20.2327C3.24461 19.23 2.72998 17.6375 2.72998 15.24V15.11C2.72998 12.9445 3.15855 11.4341 3.98232 10.425C4.79616 9.42794 6.06528 8.83643 7.94093 8.65838C8.08211 8.64984 8.21014 8.7635 8.22234 8.88858C8.2355 9.02348 8.13711 9.14824 7.99309 9.16223C6.35973 9.31321 5.12127 9.78418 4.31507 10.8052C3.52336 11.8078 3.22998 13.2422 3.22998 15.12V15.25C3.22998 17.3197 3.5908 18.8705 4.60518 19.8848C5.61955 20.8992 7.17035 21.26 9.23998 21.26H15.76C17.8296 21.26 19.3804 20.8992 20.3948 19.8848C21.4092 18.8705 21.77 17.3197 21.77 15.25V15.12C21.77 13.2318 21.4715 11.7903 20.6646 10.7867C19.8445 9.76667 18.586 9.30278 16.9261 9.16214C16.779 9.14652 16.6858 9.01993 16.6976 8.89858C16.7124 8.74671 16.833 8.65543 16.9626 8.6678Z"
                  fill="#FF0000" stroke="#FF0000" />
                <path
                  d="M12.5 15.63C12.09 15.63 11.75 15.29 11.75 14.88V2C11.75 1.59 12.09 1.25 12.5 1.25C12.91 1.25 13.25 1.59 13.25 2V14.88C13.25 15.3 12.91 15.63 12.5 15.63Z"
                  fill="#FF0000" />
                <path
                  d="M12.5001 16.75C12.3101 16.75 12.1201 16.68 11.9701 16.53L8.62009 13.18C8.33009 12.89 8.33009 12.41 8.62009 12.12C8.91009 11.83 9.39009 11.83 9.68009 12.12L12.5001 14.94L15.3201 12.12C15.6101 11.83 16.0901 11.83 16.3801 12.12C16.6701 12.41 16.6701 12.89 16.3801 13.18L13.0301 16.53C12.8801 16.68 12.6901 16.75 12.5001 16.75Z"
                  fill="#FF0000" />
               </svg>
            </button>
          </div>
          <div class="video-horizontal-line"></div>
            `;
            return str;
          })
          .join("");

        let audioQualityHTML = uniqueAudioFormats
          .map((format) => {
            let audioUrl = format.url;

            let AudioContainer = format.container;
            console.log(AudioContainer);
            return `
              <div class="grid grid-cols-2">
                <div class="flex gap-[16px] items-center justify-center p-[16px]">
                  <p class="video-mp">${AudioContainer}</p>
                </div>
                
                <button class="video-btn flex gap-[8px] justify-center items-center p-[16px]" onClick="audioDownload(this,'${audioUrl}','${title}','${AudioContainer}')" id="Audio-btn">
                  <p class="video-download">Download</p>
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9626 8.6678L16.9674 8.66821C18.877 8.83134 20.1692 9.41959 20.9973 10.4201C21.8342 11.4312 22.27 12.9501 22.27 15.13V15.26C22.27 17.647 21.7556 19.2345 20.7531 20.2348C19.7503 21.2354 18.1574 21.75 15.76 21.75H9.23998C6.8425 21.75 5.24996 21.2354 4.24728 20.2327C3.24461 19.23 2.72998 17.6375 2.72998 15.24V15.11C2.72998 12.9445 3.15855 11.4341 3.98232 10.425C4.79616 9.42794 6.06528 8.83643 7.94093 8.65838C8.08211 8.64984 8.21014 8.7635 8.22234 8.88858C8.2355 9.02348 8.13711 9.14824 7.99309 9.16223C6.35973 9.31321 5.12127 9.78418 4.31507 10.8052C3.52336 11.8078 3.22998 13.2422 3.22998 15.12V15.25C3.22998 17.3197 3.5908 18.8705 4.60518 19.8848C5.61955 20.8992 7.17035 21.26 9.23998 21.26H15.76C17.8296 21.26 19.3804 20.8992 20.3948 19.8848C21.4092 18.8705 21.77 17.3197 21.77 15.25V15.12C21.77 13.2318 21.4715 11.7903 20.6646 10.7867C19.8445 9.76667 18.586 9.30278 16.9261 9.16214C16.779 9.14652 16.6858 9.01993 16.6976 8.89858C16.7124 8.74671 16.833 8.65543 16.9626 8.6678Z" fill="#FF0000" stroke="#FF0000" />
                    <path d="M12.5 15.63C12.09 15.63 11.75 15.29 11.75 14.88V2C11.75 1.59 12.09 1.25 12.5 1.25C12.91 1.25 13.25 1.59 13.25 2V14.88C13.25 15.3 12.91 15.63 12.5 15.63Z" fill="#FF0000" />
                    <path d="M12.5001 16.75C12.3101 16.75 12.1201 16.68 11.9701 16.53L8.62009 13.18C8.33009 12.89 8.33009 12.41 8.62009 12.12C8.91009 11.83 9.39009 11.83 9.68009 12.12L12.5001 14.94L15.3201 12.12C15.6101 11.83 16.0901 11.83 16.3801 12.12C16.6701 12.41 16.6701 12.89 16.3801 13.18L13.0301 16.53C12.8801 16.68 12.6901 16.75 12.5001 16.75Z" fill="#FF0000" />
                  </svg>
                </button>
             </div>
            <div class="video-horizontal-line"></div>
    `;
          })
          .join("");

        videoQuality.innerHTML = quality_Label;
        AudioQuality.innerHTML = audioQualityHTML;
        videoFile.classList.remove("hidden");
      }

      // hideLoading();
      // videoFile.classList.add("show");
    } catch (error) {
      console.error("Error:", error);
      // hideLoading();

      errorMsg.textContent = "error!";
    }
    downloadBtn.disabled = false;
    downloadBtn.style.opacity = "1";
    e.target.style.border = "";
  } else {
    downloadBtn.disabled = true;
    downloadBtn.style.opacity = "0.5";
    e.target.style.border = "";
  }
}

async function videoDownload(button, url, qualityLabel, videoContainer, title) {
  console.log(videoContainer);
  console.log(url);
  const downloadText = button.querySelector(".video-download");
  button.disabled = true;
  const originalText = downloadText.textContent;
  downloadText.textContent = "downloading...";
  try {
    console.log(url);
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Network response was not ok: ${response.statusText}`);
    const blob = await response.blob();
    const urlObject = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = urlObject;
    a.download = `video_${title}${videoContainer}`;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(urlObject);
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error downloading video:", error);
    alert("Error downloading video. Please try again.");
  } finally {
    button.disabled = false;
    downloadText.textContent = originalText;
  }
}

async function audioDownload(button, url, title, AudioContainer) {
  console.log("Audio download initiated for URL:", url);
  const downloadText = button.querySelector(".video-download");
  button.disabled = true;
  const originalText = downloadText.textContent;
  downloadText.textContent = "downloading...";
  try {
    console.log(url);
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Network response was not ok: ${response.statusText}`);
    const blob = await response.blob();
    const urlObject = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = urlObject;
    a.download = `audio_${title}${AudioContainer}`;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(urlObject);
    document.body.removeChild(a);
  } catch (error) {
    console.error("Error downloading audio:", error);
    alert("Error downloading audio. Please try again.");
  } finally {
    button.disabled = false;
    downloadText.textContent = originalText;
  }
}
