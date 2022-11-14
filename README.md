## Introduction
<img width="478" alt="image" src="https://user-images.githubusercontent.com/57853247/201564720-618ffcf7-49f7-47aa-b65b-678d63ec940c.png">

A simple showcase of component library.

In the future we can probably manage UI components in a separate package.

## Components

This library provides four components:
* CustomAvatar
* CustomButton
* CustomCard
* CustomTooltip

You can customize the styles by passing values to `customStyles` prop.

### CustomAvatar
<img width="211" alt="image" src="https://user-images.githubusercontent.com/57853247/201565025-be64b14b-cb09-4dc1-a5cc-2a8f507cff8b.png">

```jsx
const CustomAvatar = ({ imgSrc, altText, customStyles }) => {
  return (
    <img
      className={styles.customAvatar}
      style={{ customStyles }}
      src={imgSrc}
      alt={altText}
    />
  );
};
```

### CustomButton
<img width="85" alt="image" src="https://user-images.githubusercontent.com/57853247/201565377-2fa3da9e-b045-4669-898c-5cb50f516711.png">

```jsx
const CustomButton = ({ children, customStyles }) => {
  return (
    <button className={styles.customButton} style={customStyles}>
      {children}
    </button>
  );
};
```

### CustomCard
<img width="364" alt="image" src="https://user-images.githubusercontent.com/57853247/201565558-f772ee3d-a98c-412c-9232-105b803aebb7.png">

**CustomCard** serves as more of a wrapper component. The component itself does not offer much of functionality.
```jsx
const CustomCard = ({ children, customStyle }) => {
  return (
    <div className={styles.customCard} style={customStyle || {}}>
      {children}
    </div>
  );
};
```


### CustomTooltip
![ezgif-4-ce8cad5186](https://user-images.githubusercontent.com/57853247/201566804-f1966ecf-7d17-4bb3-ab6d-290b14fa0445.gif)
```jsx
const CustomTooltip = ({ children, label, customStyles }) => {
  const [tooltipToggle, setTooltipToggle] = useState(false);
  const onMouseEnter = () => setTooltipToggle(true);
  const onMouseLeave = () => setTooltipToggle(false);
  return (
    label && (
      <div className={styles.customTooltipOuterWrapper}>
        <div
          className={styles.customTooltipInnerWrapper}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {children}
          <span
            style={customStyles}
            className={
              tooltipToggle
                ? styles.customTooltipVisible
                : styles.customTooltipInvisible
            }
          >
            {label}
          </span>
        </div>
      </div>
    )
  );
};
```
