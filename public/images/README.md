# Images Directory

This directory contains static images for the Atnurmi website.

## Image URLs Currently Used

The following external images are being used in the project:

### Hero Section
- Hero Background: `https://lh3.googleusercontent.com/aida-public/AB6AXuB9-XPVrkzAiSAVbERbRg5lH-Bgdrv84tQuR2KwdUe_G1_6BoukT85NqSmJ5nNjs-ldH0wH0E-Ercaur4S8FdRJmrKcQYtQsu8bJ3ToVOfjGMH8jICHUKqLDSSu8hjqYk_j2Ncwz3KTp9qagrDj4VfIjBvnyCRaEHkeNXMWvZpvECGQqWohixN00ZXPc_WD-A7EqtUfo_oLv-OPSm8v6Gd6SYvQzSwfi-MNwHifpBuudLxihUyAKd33bH5NSiWxTFo2t_zSrQ39GtwG`

### Products
- Atnurmi UI Kit: `https://lh3.googleusercontent.com/aida-public/AB6AXuCyqAU-0NHdDyev97VwMn0Juzv9o6Qjf5zUj2FX_VEFAOXQyAGS7AZAo6AlduGQVhvBmsT81z7aFBt1Z6Avu7qyRyVQ-OSuveZkQJwRTILYXU16GWToRwQqYNIeE4aRNs-4V7S8Vnubu1rNzRDrYf_siQe32FAI2Jy9h6S8p4AL0I9JB5mPnRyhY0KAqES5kNftZhbQA8H6cLlG0-vamTRiw8WiBZ6SioEcGErVHsQaTwG--z2e4JSlIhOp39_LMBSUJALfsTGnN7Wh`

- Texture Brush Pack: `https://lh3.googleusercontent.com/aida-public/AB6AXuBEjG66UaUtgJLyGoSPZ6P_3COediafTbDhm-vyd6ZRPrB91uKaPGsh5EiC5l8mEM8DcwVTjm-BCBJSm_2Fu19dPKvXbaeUWAWbTlC9dRiXobDn-KD5NW5zPzZ6_zlov4MUG6cddfAfblJWr56mN0Y1A1Q6P-6VYsTTzCEF0ZWOngiaYsQAdhuQJ-iREadWzQA9SH8_PrhiqgMDiA404aGR176zBWO0E-lrCbU2D2hVW4X57LdjwftfqyNLsPtmpdhXLYd8MhACPffX`

- Editorial Portfolio Template: `https://lh3.googleusercontent.com/aida-public/AB6AXuALFoERy3XeeB6wMF-4ppH01R1MnqWT71F1hup-FBF3wElKm5kbpSpfBXYZ2qEr3tJ_mU6z4d97lgWkb43HwoKH294gaDWrtvjQwbF9k203FddFhkLiTEB4nSnQLySaUDQxmNFsBtUEsrjsY89u6FOIy0OFSQyQk7knWrJQw8plrie-FTm5hbicGfm0Pzih0cGDNyfXK_PQTpgeoFAjZ6XQK76BK6tKi2a56bumOEkzLTHVOMAR5sdBNMYeg2DsYZJAbaryjbJBRGj4`

### Background Textures
- CTA Pattern: `https://www.transparenttextures.com/patterns/cubes.png`

## Note

To use local images instead:
1. Download the images from the URLs above
2. Place them in this directory
3. Update the image paths in the components to use `/images/filename.jpg`
4. Use Next.js Image component for optimization

Example:
```tsx
import Image from 'next/image';

<Image 
  src="/images/hero-bg.jpg" 
  alt="Hero background"
  fill
  priority
/>
```
