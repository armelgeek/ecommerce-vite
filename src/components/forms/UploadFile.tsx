import React, { forwardRef, useState } from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import img1 from './assets/img/1.webp';
import img2 from './assets/img/2.webp';
import img3 from './assets/img/3.webp';
import img4 from './assets/img/4.webp';
import useFileHandler from '../../hooks/useFileHandler';
import ImageLoader from '../ImageLoader';
function copy(object: any) {
    var output: any, value, key;
    output = Array.isArray(object) ? [] : {};
    for (key in object) {
        value = object[key];
        output[key] = typeof value === 'object' ? copy(value) : value;
    }
    return output;
}
const UploadFile = forwardRef(
    (
        {
            name,
            type,
            label = '',
            index = 1,
            uploadText = 'Upload Images',
            deleteText = 'Retirer',
            imageData,
            value,
            changeValue
        }: any,
        ref
    ) => {
        const [imageDataFile, setImageDataFile] = useState(imageData);
        const nodata = type == 'single' ? {} : [];
        const {
            imageFile,
            isFileLoading,
            onFileChange,
            removeImage,
            removeSingle,
            setImageFile,
        } = useFileHandler({
            [name]: imageDataFile ? imageDataFile : nodata,
        });
        React.useLayoutEffect(() => {
            if (type == 'single') {
                if (imageFile[`${name}`].hasOwnProperty('file')) {
                    changeValue(imageFile[`${name}`].file);
                }
            } else {
                changeValue(imageFile[`${name}`]);
            }
        }, [imageFile]);
        const removeExistingFile = (id: number) => {
            console.log(id)
            setImageFile((oldFiles: any) => ({
                [name]: copy(imageFile[`${name}`]).filter((img: any) => img != id),

            }));
        };
        return (
            <div className='flex  flex-row items-center w-full'>
                {type == 'single' ? (
                    <>
                        <div className='my-2'>
                            {' '}
                            {imageFile[name]?.url && (
                                <div className='flex justify-center flex-col items-center'
                                >
                                    <div>
                                        <ImageLoader
                                            src={imageFile[name]?.url}
                                            width={160}
                                            height={160}
                                        />
                                    </div>
                                    <div className='w-full text-center'>
                                        <button className='text-danger-500' onClick={() => removeSingle(name)}>[{deleteText}]</button>

                                    </div>
                                </div>
                            )}
                            {imageDataFile != null && (
                                <div className='w-full text-center'>
                                    <ImageLoader width={120} height={120} src={imageDataFile} />
                                    <button className='text-danger-500' onClick={() => setImageDataFile(null)}>[{deleteText}]</button>

                                </div>
                            )}
                        </div>

                        {imageFile[name]?.url == null && imageDataFile == null && (
                            <div className='my-2 justify-center items-center'>
                                <label htmlFor={`actual-btn-single-${index}`}>
                                    <div className='w-[120px] h-[120px]  flex flex-col justify-center items-center cursor-pointer border-1  border-dashed relative border-slate-300'>

                                        <div className='flex flex-col my-2 items-center justify-center'>
                                            <BsPlusCircleDotted
                                                style={{
                                                    fontSize: 54,
                                                    fontWeight: 'bold',
                                                    color: '#2b6cb0',
                                                }}
                                            />

                                        </div>
                                    </div>
                                </label>
                                <input
                                    id={`actual-btn-single-${index}`}
                                    hidden
                                    accept="image/x-png,image/jpeg"
                                    onChange={e =>
                                        onFileChange(e, { name: name, type: 'single' })
                                    }
                                    type="file"
                                />
                            </div>
                        )}
                    </>
                ) : (
                    <div className='flex  flex-row items-center w-full'>
                        {imageFile[name].length == 0 && imageDataFile?.length == 0 && (
                            <div className='justify-center flex-row flex items-center'>
                                <ImageLoader
                                    width={120}
                                    height={120}
                                    src={img1}
                                />
                                <ImageLoader
                                    width={120}
                                    height={120}
                                    src={img2}
                                />
                                <ImageLoader
                                    width={120}
                                    height={120}
                                    src={img3}
                                />
                                <ImageLoader
                                    width={120}
                                    height={120}
                                    src={img4}
                                />
                                <label htmlFor="actual-btn">
                                    <div className="cursor-pointer  flex flex-col justify-center items-center border  rounded-sm border-dashed border-slate-400">
                                        <div className='flex flex-col mt-3 justify-center items-center'>
                                            <BsPlusCircleDotted
                                                style={{
                                                    fontSize: 36,
                                                    fontWeight: 'medium',
                                                    color: '#2b6cb0',
                                                }}
                                            />

                                        </div>
                                        <input
                                            id="actual-btn"
                                            hidden
                                            accept="image/x-png,image/jpeg"
                                            multiple
                                            onChange={e =>
                                                onFileChange(e, { name: name, type: 'multiple' })
                                            }
                                            type="file"
                                        />
                                    </div>
                                </label>
                            </div>
                        )}
                        {imageFile[name].length >= 1 &&
                            imageFile[name].map((img: any, index: number) => (
                                <div className='flex flex-row mt-3 justify-center items-center'>
                                    {img.hasOwnProperty('url') ? (
                                        <div className='flex flex-col mr-3 justify-center items-center'>
                                            <div key={img.id}>
                                                <ImageLoader
                                                    width={120}
                                                    height={120}
                                                    src={img.url}
                                                />
                                            </div>
                                            <div className='w-full text-center'>
                                                <button className='text-danger-500' onClick={() => removeImage({ id: img.id, name: name })}>[{deleteText}]</button>

                                            </div>
                                        </div>
                                    ) : (
                                        <div className='flex flex-col mt-3 justify-center items-center'>
                                            <div key={img}>
                                                <ImageLoader
                                                    width={120}
                                                    height={120}
                                                    src={img}
                                                />
                                            </div>
                                            <div className='w-full text-center'>
                                                <button className='text-danger-500' onClick={() => removeExistingFile(img)}>[{deleteText}]</button>
                                            </div>
                                        </div>
                                    )}

                                    {index + 1 === imageFile[name].length && (
                                        <>
                                            <label htmlFor="actual-btn">
                                                <div className=' flex flex-col justify-center items-center w-[120px] h-[120px] cursor-pointer border-1  border-dashed relative border-slate-300'>

                                                    <div className='flex flex-col mr-3 justify-center items-center'>
                                                        <BsPlusCircleDotted
                                                            style={{
                                                                fontSize: 54,
                                                                fontWeight: 'bold',
                                                                color: '#2b6cb0',
                                                            }}
                                                        />

                                                    </div>
                                                    <input
                                                        id="actual-btn"
                                                        hidden
                                                        ref={ref}
                                                        accept="image/x-png,image/jpeg"
                                                        multiple
                                                        onChange={e =>
                                                            onFileChange(e, { name: name, type: 'multiple' })
                                                        }
                                                        type="file"
                                                    />
                                                </div>
                                            </label>
                                        </>
                                    )}
                                </div>
                            ))}
                        {imageFile[name].length == 0 && (
                            <>
                                <label htmlFor="actual-btn">
                                    <div className='w-[120px] h-[120px] flex flex-col justify-center items-center cursor-pointer border-1  border-dashed relative border-slate-300'>
                                        <div className='flex flex-col mr-3 justify-center items-center'>
                                            <BsPlusCircleDotted
                                                style={{
                                                    fontSize: 54,
                                                    fontWeight: 'bold',
                                                    color: '#2b6cb0',
                                                }}
                                            />

                                        </div>
                                        <input
                                            id="actual-btn"
                                            hidden
                                            ref={ref}
                                            accept="image/x-png,image/jpeg"
                                            multiple
                                            onChange={e =>
                                                onFileChange(e, { name: name, type: 'multiple' })
                                            }
                                            type="file"
                                        />
                                    </div>
                                </label>
                            </>
                        )}
                    </div>
                )}
            </div>
        );
    }
);
export default UploadFile;