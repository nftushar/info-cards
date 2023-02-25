import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
    InspectorControls,
    MediaUploadCheck,
    MediaUpload,
} from "@wordpress/block-editor";

import {
    RangeControl,
    Button,
    ColorPalette,
    TabPanel,
    PanelBody,
    PanelRow,
    TextControl,
    __experimentalBoxControl as BoxControl,
    __experimentalUnitControl as UnitControl,
} from "@wordpress/components";

import "./editor.scss";

// import { getBoxValue } from "../src/utils/function";
import Title from '../../Components/Title';
import BColor from "../../Components/BColor";
import Background from '../../Components/Background';
import ColorsControl from '../../Components/ColorsControl';

import BDevice from "../../Components/BDevice";
import { InlineMediaUpload } from "../../Components/MediaControl";

export default function ({ attributes, setAttributes }) {
    const { cards, btnPadding, columns, titleTypo, descTypo, contentPadding, columnGap, rowGap, } = attributes;

    const [device, setDevice] = useState("desktop");

    function setTitleTypo(newFontSize) {
        setAttributes({ titleTypo: { ...setTitleTypo, fontSize: newFontSize } });
    }

    function setDescTypo(newFontSize) {
        setAttributes({ descTypo: { ...setDescTypo, fontSize: newFontSize } });
    }

    const handleSubmit = () => {
        const newCrads = [
            ...cards, {
                background: {
                    color: "blue",
                },
                img: "https://greenaromabd.com/wp-content/uploads/2021/04/Scotch-bonnet-peppers.png",
                title: "This Is My Title",
                desc: "This Is My New Description",
                btnLabal: "Button",
                titleColor: "#69f70c",
                descColor: "#69f70c",
                btnUrl: "https://www.google.com/",
                btnColor: {
                    color: "#d82e2e",
                },
            },
        ];
        setAttributes({ cards: newCrads });
    };

    function updateBtnColor(index, property1, property2, value) {
        const newCrads = [...cards];
        newCrads[index][property1][property2] = value;
        setAttributes({ cards: newCrads });
    }

    function updateCard(index, property, value) {
        // console.log(property);
        const newCrads = [...cards];
        newCrads[index][property] = value;
        setAttributes({ cards: newCrads });
    }

    function handleDelete(index) {
        // console.log("hello");
        const newCrads = [...cards];
        newCrads.splice(index, 1);
        setAttributes({ cards: newCrads });
    }
    // console.log(attributes.columnGap);


    return <InspectorControls>
        <TabPanel
            className="my-tab-panel"
            activeClass="active-tab"
            tabs={[
                {
                    name: "Option",
                    title: "Option",
                    className: "option",
                },
                {
                    name: "Style",
                    title: "Style",
                    className: "style",
                },
            ]}
        >
            {(tab) => (
                <div>
                    <PanelBody className='bPlPanelBody' title="Cards">
                        <PanelRow>
                            <button className="btnAdd" onClick={() => handleSubmit()}>ADD</button>
                        </PanelRow>

                        {cards.map((card, index) => {
                            const { background, img, title, titleColor, desc, descColor, btnLabal, btnUrl, btnColors } = card;

                            return <PanelBody className='bPlPanelBody' title={`This is card ${index + 1}`} initialOpen={false}>
                                <Background label={__('Background', 'info-cards')} value={background} onChange={(val) => updateCard(index, "background", val)} isImage={false} />

                                <InlineMediaUpload value={img} onChange={(val) => updateCard(index, 'img', val)} placeholder={__('Enter Image URL', 'info-cards')} />

                                <BColor label={__('Title Color', 'info-cards')} value={titleColor} onChange={(val) => updateCard(index, 'titleColor', val)} />

                                <BColor label={__('Desc Color', 'info-cards')} value={descColor} onChange={(val) => updateCard(index, 'descColor', val)} />

                                <ColorsControl label={__('Button Colors', 'info-cards')} value={btnColors} onChange={(val) => updateCard(index, 'btnColors', val)} />

                                <PanelRow>
                                    <button onClick={() => handleDelete()}>Delete</button>
                                </PanelRow>

                                <PanelBody>
                                    <PanelRow>
                                        <UnitControl
                                            label="Title Font Size"
                                            onChange={setTitleTypo}
                                            value={titleTypo.fontSize}
                                        />
                                    </PanelRow>
                                    <PanelRow>
                                        <UnitControl
                                            label="Desc Font Size"
                                            onChange={setDescTypo}
                                            value={descTypo.fontSize}
                                        />
                                    </PanelRow>
                                    <PanelRow>
                                        <TextControl
                                            label="Add Button Url"
                                            value={card.btnUrl}
                                            onChange={(content) =>
                                                updateCard(index, "btnUrl", content)
                                            }
                                        />
                                    </PanelRow>
                                </PanelBody>
                            </PanelBody>
                        })}
                    </PanelBody>

                    <PanelBody title="Layout" >
                        <PanelBody>
                            <PanelRow>
                                <Title className='mb5'>{__('Columns:', 'advanced-post-block')}</Title>
                                <BDevice device={device} onChange={val => setDevice(val)} />
                            </PanelRow>
                            <RangeControl value={columns[device]} onChange={val => { setAttributes({ columns: { ...columns, [device]: val } }) }} min={1} max={6} step={1} beforeIcon='grid-view' />


                            <PanelRow>
                                {/* Content Padding */}
                                <BoxControl
                                    label="Contend Paddign"
                                    // onChange={setContentPadding}
                                    values={contentPadding}
                                    onChange={(value) =>
                                        setAttributes({ contentPadding: value })
                                    }
                                />
                                {/* {console.log(attributes)} */}
                            </PanelRow>
                            <PanelRow>
                                {/* Button Padding */}
                                <BoxControl
                                    label="Button Paddign"
                                    values={btnPadding}
                                    onChange={(value) => setAttributes({ btnPadding: value })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <UnitControl
                                    label="Column Gap"
                                    value={columnGap}
                                    onChange={(val) => setAttributes({ columnGap: val })}
                                />
                            </PanelRow>
                            <PanelRow>
                                <UnitControl
                                    label="Row Gap"
                                    value={rowGap}
                                    onChange={(val) => setAttributes({ rowGap: val })}
                                />
                            </PanelRow>
                        </PanelBody>
                    </PanelBody>
                </div>
            )}
        </TabPanel>
    </InspectorControls>
}