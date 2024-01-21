
import PropType from 'prop-types';
import React, { useState } from 'react';
import { useSmartcrop } from 'use-smartcrop';

const ImageLoader = ({
    src,
    alt,
    className,
    width = 120,
    height = 120
}: {
    src: string
    alt?: string
    className?: string
    width: number
    height: number
}) => {
    const loadedImages = {} as any;
    const [loaded, setLoaded] = useState(loadedImages[src]);
    const [cropped, error] = useSmartcrop(
        { src },
        { width: width, height: height, minScale: 1.0 }
    );

    return (
        <div className='relative'>
            <img src={cropped ? cropped : ''} className={`${className} shadow-sm rounded-md`} alt={alt || "Description de l'image"} width={width} height={height} />
        </div>
    );
};

ImageLoader.defaultProps = {
    className: 'image-loader',
};

ImageLoader.propTypes = {
    src: PropType.string.isRequired,
    className: PropType.string,
};

export default ImageLoader;
