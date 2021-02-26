import React from "react";

const Display = (props) => {
  const loaded = () => {
    return (
      <div className="display-container">
        <div className="header-container">
          <div id="tunatunr-logo">
            <svg
              id="logo"
              viewBox="0 0 621 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M134.7 48.47L144.96 10.82C145.97 6.76 150.03 3.72 153.07 2.2C155.1 1.19 158.99 0 160.34 0C161.19 0 161.69 0.51 161.69 1.18C161.69 2.19 160.51 3.38 159.66 5.24C158.65 7.27 156.79 11.49 155.77 15.55L146.86 48.47H134.7ZM146.87 48.47C143.49 62.5 138.59 82.61 138.59 90.05C138.59 92.59 139.94 93.77 142.14 93.77C145.69 93.77 151.77 87.01 157.69 78.39C158.7 76.87 159.21 76.36 159.89 76.36C160.57 76.36 161.07 76.53 161.07 77.2C161.07 78.21 160.22 79.23 159.21 80.75C154.48 87.68 144.84 102.05 134.37 102.05C128.45 102.05 125.92 98.5 125.92 93.77C125.92 82.78 130.82 63.52 134.71 48.48"
                  fill="black"
                />
                <path
                  d="M201.12 93.77C204.5 93.77 210.58 87.01 216.5 78.39C217.51 76.87 218.19 76.36 218.7 76.36C219.38 76.36 219.88 76.53 219.88 77.2C219.88 78.05 218.53 80.24 218.19 80.75C210.25 92.41 201.8 102.05 193.18 102.05C187.26 102.05 184.73 98.5 184.73 93.77C184.73 91.74 185.24 88.53 185.91 84.81C180.16 92.58 172.73 102.05 164.28 102.05C158.53 102.05 154.98 98.84 154.98 92.25C154.98 87.01 158.36 71.8 160.56 63.52C161.74 59.13 166.14 56.25 168.84 54.9C171.71 53.38 174.76 52.7 176.11 52.7C176.95 52.7 177.46 53.04 177.46 53.71C177.46 54.72 176.28 55.91 175.43 57.77C173.4 61.66 168.33 81.09 168.33 88.19C168.33 91.23 169.68 93.26 172.22 93.26C175.26 93.26 179.49 88.53 185.74 78.39C188.11 74.5 189.63 66.56 190.47 63.52C191.48 59.46 195.37 56.42 198.58 54.9C201.62 53.38 204.5 52.7 205.85 52.7C206.69 52.7 207.2 53.04 207.2 53.71C207.2 54.72 206.02 55.91 205.17 57.77C203.31 61.66 197.4 82.11 197.4 90.05C197.4 92.58 198.75 93.77 201.12 93.77Z"
                  fill="black"
                />
                <path
                  d="M229.17 79.57C226.8 84.81 225.28 89.54 224.44 93.26C223.43 97.49 218.19 100.02 215.31 101.2C213.79 101.88 212.1 102.38 210.58 102.38C210.07 102.38 209.57 102.04 209.57 101.37C209.57 100.53 209.91 100.19 210.92 97.65C212.61 93.59 216.84 71.79 219.03 63.51C220.21 59.12 224.61 56.24 227.31 54.89C230.18 53.37 233.23 52.69 234.58 52.69C235.43 52.69 235.93 53.03 235.93 53.7C235.93 54.71 234.75 55.9 233.9 57.76C232.72 60.13 231.2 65.2 229.51 71.45C232.72 66.55 242.35 53.03 252.49 53.03C257.9 53.03 261.28 56.58 261.28 61.48C261.28 70.77 255.7 82.61 255.7 90.04C255.7 92.58 257.05 93.76 258.91 93.76C262.12 93.76 268.54 87 274.46 78.38C275.3 77.03 275.81 76.35 276.66 76.35C277.17 76.35 277.67 76.52 277.67 77.19C277.67 78.04 276.32 80.23 275.98 80.74C270.57 88.51 261.28 102.04 250.97 102.04C246.24 102.04 242.69 98.49 242.69 93.08C242.69 82.94 248.27 73.14 248.27 65.19C248.27 62.99 246.75 61.81 244.89 61.81C240.32 61.82 232.21 72.64 229.17 79.57Z"
                  fill="black"
                />
                <path
                  d="M323.81 52.7C324.32 52.7 324.99 52.87 324.99 53.71C324.99 54.89 323.64 56.92 323.13 57.94C319.41 65.55 314.51 81.43 314.51 90.05C314.51 92.59 315.69 93.77 317.72 93.77C321.61 93.77 327.69 87.01 333.61 78.39C334.62 76.87 335.13 76.36 335.81 76.36C336.49 76.36 336.99 76.7 336.99 77.37C336.99 78.38 336.31 79.4 335.3 80.92C329.22 89.71 319.92 102.05 309.27 102.05C305.04 102.05 302.68 99.01 302.68 93.6C302.68 89.54 303.69 84.64 303.69 84.64C299.3 91.4 292.37 102.05 281.55 102.05C275.13 102.05 271.58 96.98 271.58 89.37C271.58 73.31 283.92 53.03 302.68 53.03C309.61 53.03 312.14 57.26 313.16 59.79C314.34 57.25 317.55 54.89 320.09 53.54C321.61 52.87 322.96 52.7 323.81 52.7ZM284.94 88.69C284.94 92.58 285.95 94.77 288.83 94.77C295.59 94.77 308.94 70.43 308.94 62.83C308.94 59.28 307.25 56.75 303.36 56.75C294.23 56.75 284.94 77.2 284.94 88.69Z"
                  fill="black"
                />
                <path
                  d="M339.69 48.47L348.48 10.82C349.49 6.76 353.55 3.72 356.59 2.2C358.62 1.19 362.51 0 363.86 0C364.7 0 365.21 0.51 365.21 1.18C365.21 2.19 364.03 3.38 363.18 5.24C362.17 7.27 360.31 11.49 359.29 15.55L351.85 48.47H339.69ZM351.86 48.47C348.48 62.5 343.58 82.61 343.58 90.05C343.58 92.59 344.93 93.77 347.13 93.77C350.68 93.77 356.76 87.01 362.68 78.39C363.69 76.87 364.2 76.36 364.88 76.36C365.56 76.36 366.06 76.53 366.06 77.2C366.06 78.21 365.22 79.23 364.2 80.75C359.47 87.68 349.83 102.05 339.36 102.05C333.44 102.05 330.91 98.5 330.91 93.77C330.91 82.78 335.81 63.52 339.7 48.48"
                  fill="black"
                />
                <path
                  d="M406.11 93.77C409.49 93.77 415.57 87.01 421.49 78.39C422.5 76.87 423.18 76.36 423.69 76.36C424.37 76.36 424.87 76.53 424.87 77.2C424.87 78.05 423.52 80.24 423.18 80.75C415.24 92.41 406.79 102.05 398.17 102.05C392.25 102.05 389.72 98.5 389.72 93.77C389.72 91.74 390.23 88.53 390.9 84.81C385.15 92.58 377.72 102.05 369.27 102.05C363.52 102.05 359.98 98.84 359.98 92.25C359.98 87.01 363.36 71.8 365.56 63.52C366.74 59.13 371.14 56.25 373.84 54.9C376.71 53.38 379.76 52.7 381.11 52.7C381.95 52.7 382.46 53.04 382.46 53.71C382.46 54.72 381.28 55.91 380.43 57.77C378.4 61.66 373.33 81.09 373.33 88.19C373.33 91.23 374.68 93.26 377.22 93.26C380.26 93.26 384.49 88.53 390.74 78.39C393.11 74.5 394.63 66.56 395.47 63.52C396.48 59.46 400.37 56.42 403.58 54.9C406.62 53.38 409.5 52.7 410.85 52.7C411.69 52.7 412.2 53.04 412.2 53.71C412.2 54.72 411.02 55.91 410.17 57.77C408.31 61.66 402.4 82.11 402.4 90.05C402.39 92.58 403.74 93.77 406.11 93.77Z"
                  fill="black"
                />
                <path
                  d="M434.16 79.57C431.79 84.81 430.27 89.54 429.43 93.26C428.42 97.49 423.18 100.02 420.3 101.2C418.78 101.88 417.09 102.38 415.57 102.38C415.06 102.38 414.56 102.04 414.56 101.37C414.56 100.53 414.9 100.19 415.91 97.65C417.6 93.59 421.83 71.79 424.02 63.51C425.2 59.12 429.6 56.24 432.3 54.89C435.17 53.37 438.22 52.69 439.57 52.69C440.41 52.69 440.92 53.03 440.92 53.7C440.92 54.71 439.74 55.9 438.89 57.76C437.71 60.13 436.19 65.2 434.5 71.45C437.71 66.55 447.34 53.03 457.48 53.03C462.89 53.03 466.27 56.58 466.27 61.48C466.27 70.77 460.69 82.61 460.69 90.04C460.69 92.58 462.04 93.76 463.9 93.76C467.11 93.76 473.53 87 479.45 78.38C480.3 77.03 480.8 76.35 481.65 76.35C482.16 76.35 482.66 76.52 482.66 77.19C482.66 78.04 481.31 80.23 480.97 80.74C475.56 88.51 466.27 102.04 455.96 102.04C451.23 102.04 447.68 98.49 447.68 93.08C447.68 82.94 453.26 73.14 453.26 65.19C453.26 62.99 451.74 61.81 449.88 61.81C445.32 61.82 437.2 72.64 434.16 79.57Z"
                  fill="black"
                />
                <path
                  d="M491.17 70.94C491.17 70.1 490.83 69.93 490.33 69.76C487.79 68.75 489.24 69.47 488.57 68.97C484.68 75.56 484.1 76.37 480.53 81.32C478.7 83.82 478.32 84.54 477.64 84.54C477.13 84.54 476.78 83.4 476.78 82.73C476.78 82.05 477.35 81.13 478.19 79.95C481.57 75.22 481.72 75.36 485.77 67.93C483.4 66.58 478.39 65.79 478.5 59.63C478.57 55.57 481.79 52.96 485.67 52.96C488.54 52.96 490.66 54.73 490.66 57.26C490.66 61.15 488.29 61.82 488.29 63.18C488.29 65.04 499.11 65.38 504.51 65.38C505.69 65.38 506.2 65.55 506.2 66.23C506.2 67.41 505.86 67.92 504.68 69.27C501.64 72.82 500.16 86.09 500.16 90.32C500.16 92.86 501.34 94.04 503.37 94.04C507.09 94.04 513.68 86.94 519.26 78.66C519.94 77.48 520.61 76.63 521.46 76.63C521.97 76.63 522.47 76.8 522.47 77.47C522.47 78.32 521.96 79.33 520.78 81.02C515.88 87.95 505.4 102.32 494.92 102.32C490.69 102.32 487.48 99.28 487.48 93.87C487.49 84.22 491.17 75.68 491.17 70.94Z"
                  fill="black"
                />
                <path
                  d="M615.22 102.37C556.94 62.93 490.12 37.71 420.24 29.36C349.85 20.95 278.41 22.88 208.23 35.24C194.03 37.74 179.99 41.02 166.11 44.94L5 97.33V5.33L109.74 46.81L5 37.63V72.74L109.74 46.81"
                  stroke="black"
                  strokeWidth="10"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  id="logo-dash"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="tagline-container">
          tunatunr playlist, <span>drop the bass</span>
        </div>
        <div className="content-container">
          <div className="content-container-title">full playlist</div>
          {props.songs.map((song, index) => {
            return (
              <div className="song-container" key={index}>
                <div className="song-title">{song.name}</div>
                <div className="song-artist">{song.artist}</div>
                <div className="song-album">{song.album}</div>
                <div className="song-time">{song.time}</div>
                <button
                  className="song-favorite"
                  onClick={() => props.handleFavorite(song)}
                >
                  +
                </button>
                <button
                  className="song-delete"
                  onClick={() => props.handleDelete(song)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
        <div className="display-container-bottom"></div>
      </div>
    );
  };

  const loading = () => "Loading";

  return props.songs.length > 0 ? loaded() : loading();
};

export default Display;
