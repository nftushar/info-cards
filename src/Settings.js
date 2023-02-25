import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
    InspectorControls,
} from "@wordpress/block-editor";

import {
    RangeControl,
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
import Typography from '../../Components/Typography';

import BDevice from "../../Components/BDevice";
import { InlineMediaUpload } from "../../Components/MediaControl";

export default function ({ attributes, setAttributes }) {
    const { cards, columns, columnGap, rowGap, background, padding, contentPadding, titleTypo, descTypo, btnPadding } = attributes;

    const [device, setDevice] = useState("desktop");

    const handleSubmit = () => {
        const newCrads = [
            ...cards, {
                background: {
                    color: '#fff',
                },
                img: 'https://greenaromabd.com/wp-content/uploads/2021/04/Scotch-bonnet-peppers.png',
                title: 'This Is My Title',
                titleColor: '#69f70c',
                desc: 'This Is My New Description',
                descColor: '#69f70c',
                btnLabal: 'Button',
                btnUrl: 'https://www.google.com',
                btnColors: {
                    color: '#fff',
                    bg: '#4527a4',
                },
                btnHovColors: {
                    color: '#fff',
                    bg: '#fe6601',
                }
            },
        ];
        setAttributes({ cards: newCrads });
    };

    function updateCard(index, property, value) {
        const newCrads = [...cards];
        newCrads[index][property] = value;
        setAttributes({ cards: newCrads });
    }

    function handleDelete(index) {
        const newCrads = [...cards];
        newCrads.splice(index, 1);
        setAttributes({ cards: newCrads });
    }


    return <InspectorControls>
        <TabPanel
            className="bPlTabPanel"
            activeClass="activeTab"
            tabs={[
                { name: "general", title: "General" },
                { name: "style", title: "Style" }
            ]}
        >
            {(tab) => <>
                {'general' === tab.name && <>
                    <PanelBody className='bPlPanelBody' title="Add or Remove Cards">
                        <button className="btnAdd" onClick={() => handleSubmit()}>ADD</button>

                        {cards.map((card, index) => {
                            const { background, img, titleColor, descColor, btnUrl, btnHovColors, btnColors } = card;

                            return <PanelBody className='bPlPanelBody' title={`This is card ${index + 1}`} initialOpen={false}>
                                <Background label={__('Background', 'info-cards')} value={background} onChange={(val) => updateCard(index, "background", val)} isImage={false} />

                                <InlineMediaUpload value={img} onChange={(val) => updateCard(index, 'img', val)} placeholder={__('Enter Image URL', 'info-cards')} />

                                <BColor label={__('Title Color', 'info-cards')} value={titleColor} onChange={(val) => updateCard(index, 'titleColor', val)} />

                                <BColor label={__('Description Color', 'info-cards')} value={descColor} onChange={(val) => updateCard(index, 'descColor', val)} />

                                <ColorsControl label={__('Button Colors', 'info-cards')} value={btnColors} onChange={(val) => updateCard(index, 'btnColors', val)} />

                                <ColorsControl label={__('Button Hover Colors', 'info-cards')} value={btnHovColors} onChange={(val) => updateCard(index, 'btnHovColors', val)} />

                                <TextControl className='mt20'
                                    label={__('Button Url', 'info-cards')}
                                    labelPosition='left'
                                    value={btnUrl}
                                    onChange={(content) =>
                                        updateCard(index, "btnUrl", content)
                                    }
                                />

                                <PanelRow className="itemAction">
                                    <button onClick={() => handleDelete()}>Delete</button>
                                </PanelRow>
                            </PanelBody>
                        })}
                    </PanelBody>

                    <PanelBody title="Layout">
                        <PanelRow>
                            <Title className='mb5'>{__('Columns:', 'info-cards')}</Title>
                            <BDevice device={device} onChange={val => setDevice(val)} />
                        </PanelRow>
                        <RangeControl value={columns[device]} onChange={val => { setAttributes({ columns: { ...columns, [device]: val } }) }} min={1} max={6} step={1} beforeIcon='grid-view' />

                        <UnitControl
                            label={__("Column Gap")}
                            value={columnGap}
                            onChange={(val) => setAttributes({ columnGap: val })}
                        />

                        <UnitControl
                            label={__("Row Gap")}
                            value={rowGap}
                            onChange={(val) => setAttributes({ rowGap: val })}
                        />
                    </PanelBody>
                </>}


                {'style' === tab.name && <>
                    <PanelBody title='Cards' className='bPlPanelBody'>
                        <Background label={__('background', 'info-cards')} value={background} onChange={(val) => setAttributes({ background: val })} />

                        <BoxControl
                            label={__("Paddign")}
                            values={padding}
                            onChange={(value) =>
                                setAttributes({ padding: value })
                            } />
                    </PanelBody>


                    <PanelBody title='Content'>
                        <BoxControl
                            label={__("Content Paddign")}
                            values={contentPadding}
                            onChange={(value) =>
                                setAttributes({ contentPadding: value })
                            }
                        />

                        <Typography className='mt20' label='Title Typography' value={titleTypo} onChange={val => setAttributes({ titleTypo: val })} />
                        
                        <Typography className='mt20' label='Description Typography' value={descTypo} onChange={val => setAttributes({descTypo: val })} />
                    </PanelBody>


                    <PanelBody title='Button'>
                        <PanelRow>
                            <BoxControl
                                label={__("Button Paddign")}
                                values={btnPadding}
                                onChange={(value) => setAttributes({ btnPadding: value })}
                            />
                        </PanelRow>
                    </PanelBody>
                </>}
            </>}
        </TabPanel>
    </InspectorControls>
}